import React, {useRef, useState} from 'react'
import * as parseUtils from "../utils/parseUtils"
import styled from 'styled-components';

const EditorWrap = styled.div`
    display:flex;
    margin: 10px;
    
    .editable{
        background:rgba(0,0,0,0.02);
        width:50%;
        height: 200px;
        padding:10px;
        box-shadow: inset 0 1px 3px rgba(0,0,0,0.02);
        border:1px solid #ccc;
        margin:2px;
        font-size:13px;
        font-family: "Arial";
        overflow:auto;
    }
    [contenteditable=true]:empty:before{
        content: attr(placeholder);
        display: block; 
        color:#ccc;
    }

`;
export default function EditorComponent() {
    const latinEditor: any = useRef<string>("");
    const crylicEditor: any = useRef<string>("");
    const [crylicValue, setCrylicValue] = useState<string>("")
    const latinContentListener = (e: any) => {
        let htmlContent = e.target.innerHTML + "<";
        // htmlContent.replace(/(w+)(<[^>]+>)(w+)/ig, (a: string, b: string, c: string, f: string) => {
        // htmlContent.replace(/([\w\s?]+)<[^>]+>([\w\s?]+)/ig, (a: string, b: string, c: string, f: string) => {
        htmlContent = htmlContent.replace(/(>?)(.[^>]+)(<)/g, (a: string, b: string, c: string, f: string): string => {
            console.log("REPLACEMENT === ", c, parseUtils.parseToCrylic(c))
            return String(b + parseUtils.parseToCrylic(c) + f);
        })
        setCrylicValue(htmlContent)
    }
    return (
        <EditorWrap>
            <div ref={latinEditor}
                 contentEditable={true}
                 className="editable latin-editor"
                 placeholder="Lotincha matn..."
                 onKeyUp={latinContentListener}

            >
            </div>
            <div ref={crylicEditor}
                 contentEditable={true}
                 className="editable crylic-editor"
                 placeholder="Krilcha matn..."
                 dangerouslySetInnerHTML={{__html: crylicValue}}>
            </div>
        </EditorWrap>
    )
} 