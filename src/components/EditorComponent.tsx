import React, { useRef, useState } from 'react'
import * as parseUtils from "../utils/parseUtils"
import styled from 'styled-components';
import CopyHTMLContentSVG from "./svg/CopyHTMLContentSVG"
import CopyTextContentSVG from "./svg/CopyTextContentSVG"
import IconHandLeftArrowSVG from "./svg/IconHandLeftArrowSVG"
import IconHandRightArrowSVG from "./svg/IconHandRightArrowSVG"
interface IContentObject {
    htmlContent: string,
    textContent: string
}
const EditorWrap = styled.div`
    display:flex;
    margin: 10px;
    @media screen and (max-width: 768px) {
        flex-direction:column;
        .editable-box{
            width:100% !important;
        }
    }
    .editable-box{
        width:50%;
        margin:10px 2px;
    }
    .editable{
        background:white;
        height: 200px;
        padding:10px;
        box-shadow: inset 0 1px 3px rgba(0,0,0,0.02);
        border:1px solid #ccc;
        font-size:13px;
        font-family: "Arial";
        overflow:auto;
    }
    .editable:focus{
       outline:none;
       border:1px solid #5983e8;
    }
    [contenteditable=true]:empty:before{
        content: attr(placeholder);
        display: block; 
        color:#ccc;
    }

    .editable-box__footer{
        margin-top:2px;  
        color: #999;
        padding:2px;
        background: rgba(0,0,0,0.04);
        display:flex;
        font-size: 11px;
    }

    .editable-box__footer .count-info{
        padding:10px;
        flex:1;
    }

    .editable-box__footer .action-box .btn{
        border: 1px solid transparent;
        padding: 3px 6px 4px;
        text-align:center;
        border-radius: 3px;
        margin:2px;
        /*background: linear-gradient(120deg, #00e4d0, #5983e8);*/
        background:rgba(0,0,0,0.05);
        transition: all ease  1s
    }

    .editable-box__footer .action-box .btn svg{
        vertical-align:sub;
    }

    .editable-box__footer .action-box .btn-convert{
        /*color:#5983e8;
        font-size:12px !important;
        border: 1px solid #5983e8;*/
    }
    .editable-box__footer .action-box .btn:hover{
        border: 1px solid #666;
        background: white;
    }
`;
export default function EditorComponent() {
    const latinEditor: any = useRef<string>("");
    const crylicEditor: any = useRef<string>("");
    const [latinValue, setLatinValue] = useState<string>("")
    const [crylicValue, setCrylicValue] = useState<string>("")
    const [latinObj, setLatinObj] = useState<IContentObject>({ htmlContent: "", textContent: "" })
    const [crylicObj, setCrylicObj] = useState<IContentObject>({ htmlContent: "", textContent: "" })



    const latinContentListener = (e: any) => {
        let htmlContent = e.target.innerHTML;
        // setLatinValue(htmlContent);
        setLatinObj({
            htmlContent: htmlContent,
            textContent: parseUtils.clearHTMLContent(htmlContent)
        })

        htmlContent += "<";

        // htmlContent.replace(/(w+)(<[^>]+>)(w+)/ig, (a: string, b: string, c: string, f: string) => {
        // htmlContent.replace(/([\w\s?]+)<[^>]+>([\w\s?]+)/ig, (a: string, b: string, c: string, f: string) => {
        htmlContent = htmlContent.replace(/(>?)(.[^>]+)(<)/g, (a: string, b: string, c: string, f: string): string => {
            console.log("REPLACEMENT === ", c, parseUtils.parseToCrylic(c))
            let parsed_str = parseUtils.parseToCrylic(c);
            parsed_str = parsed_str.replace(/&([^;]+);/g, (all, first) =>
                "&" + parseUtils.parseToLatin(first) + ";")
            return String(b + parsed_str + f);
        })
        htmlContent = htmlContent.slice(0, -1);
        setCrylicValue(htmlContent)
        setCrylicObj({
            htmlContent,
            textContent: parseUtils.clearHTMLContent(htmlContent)
        })

    }


    const crylicContentListener = (e: any) => {
        let htmlContent = e.target.innerHTML;
        setCrylicObj({
            htmlContent,
            textContent: parseUtils.clearHTMLContent(htmlContent)
        })
        // setLatinValue(htmlContent);
        htmlContent += "<";

        // htmlContent.replace(/(w+)(<[^>]+>)(w+)/ig, (a: string, b: string, c: string, f: string) => {
        // htmlContent.replace(/([\w\s?]+)<[^>]+>([\w\s?]+)/ig, (a: string, b: string, c: string, f: string) => {
        htmlContent = htmlContent.replace(/(>?)(.[^>]+)(<)/g, (a: string, b: string, c: string, f: string): string => {
            console.log("REPLACEMENT === ", c, parseUtils.parseToCrylic(c))
            let parsed_str = parseUtils.parseToLatin(c);
            // parsed_str = parsed_str.replace(/&([^;]+);/g, (all, first) =>
            //     "&" + parseUtils.parseToLatin(first) + ";")
            return String(b + parsed_str + f);
        })
        htmlContent = htmlContent.slice(0, -1);

        setLatinValue(htmlContent)
        setLatinObj({
            htmlContent,
            textContent: parseUtils.clearHTMLContent(htmlContent)
        })

    }

    // const crylic_word_count = document.querySelector(".crylic-editor").textContent;

    return (
        <>
            <EditorWrap>
                <div className='editable-box'>
                    <div ref={latinEditor}
                        contentEditable={true}
                        className="editable latin-editor"
                        placeholder="Lotincha matn..."
                        onKeyUp={latinContentListener}
                        onFocus={latinContentListener}
                        dangerouslySetInnerHTML={{ __html: latinValue }}
                    >
                    </div>

                    <div className="editable-box__footer">
                        <div className="count-info">
                            Lotincha matn: {latinObj.textContent.length} ta belgi
                        </div>
                    </div>
                </div>
                <div className='editable-box'>
                    <div ref={crylicEditor}
                        contentEditable={true}
                        className="editable crylic-editor"
                        placeholder="Krilcha matn..."
                        onKeyUp={crylicContentListener}
                        onFocus={crylicContentListener}
                        dangerouslySetInnerHTML={{ __html: crylicValue }}>
                    </div>
                    <div className="editable-box__footer">
                        <div className="count-info">
                            Кирилча матн: {crylicObj.textContent.length} та белги
                        </div>
                        <div className="action-box">
                            <label>
                                <input type="checkbox" /> Krilcha chapda tursin
                            </label>
                            <button className="btn">
                                <CopyHTMLContentSVG title="Тўлиқ нусхалаш" color="#666" />
                            </button>
                            <button className="btn">
                                <CopyTextContentSVG title="Фақат матнни нусхалаш" />
                            </button>
                            <button className="btn btn-convert">
                                <IconHandRightArrowSVG title="Лотинга ўгириш" color="#5983e8" />
                            </button>
                        </div>
                    </div>
                </div>
            </EditorWrap>

            <div
                placeholder="Krilcha matn...">
                {crylicObj.htmlContent}
            </div>
        </>
    )
} 