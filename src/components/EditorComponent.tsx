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
    return (
        <EditorWrap>
            <div ref={latinEditor}
                 contentEditable={true}
                 className="editable latin-editor"
                 placeholder="Lotincha matn..."
                 onKeyUp={(e: any) => setCrylicValue(parseUtils.parseToCrylic(e.target.innerHTML))}

            >
            </div>
            <div ref={crylicEditor}
                 contentEditable={true}
                 className="editable crylic-editor"
                 placeholder="Krilcha matn..." >
                {crylicValue}
            </div>
        </EditorWrap>
    )
} 