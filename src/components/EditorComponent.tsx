import React, { useRef, useState } from 'react'
import * as parseUtils from "../utils/parseUtils"
import styled from 'styled-components';
import CopyHTMLContentSVG from "./svg/CopyHTMLContentSVG"
import CopyTextContentSVG from "./svg/CopyTextContentSVG"
import IconHandLeftArrowSVG from "./svg/IconHandLeftArrowSVG"
import IconHandRightArrowSVG from "./svg/IconHandRightArrowSVG"
import IconBoldSVG from "./svg/IconBoldSVG"
import IconItalicSVG from "./svg/IconItalicSVG"
import IconUnderlineSVG from "./svg/IconUnderlineSVG"
import { toast } from 'react-toastify';
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
        margin:2px 2px 15px;
    }
    .editable{
        background:white;
        height: 400px;
        padding:10px;
        box-shadow: inset 0 1px 3px rgba(0,0,0,0.02);
        border:1px solid #ccc;
        font-size:15px;
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

    

`;

const EditorHeader = styled.div`
    background:  rgba(0,0,0,0.1);
    padding:5px;

    .btn{
        border:1px solid rgba(0,0,0,0.05);
        background:#fff;   
        padding:5px 7px 3px; 
    }
`

const EditorFooter = styled.div`
    margin-top:2px;  
    color: #999;
    padding:2px;
    background: rgba(0,0,0,0.04);
    display:flex;
    font-size: 11px;

    .count-info{
        padding:10px;
        flex:1;
    }
    .action-box .btn{
        border: 1px solid transparent;
        padding: 3px 6px 4px;
        text-align:center;
        border-radius: 3px;
        margin:2px;
        /*background: linear-gradient(120deg, #00e4d0, #5983e8);*/
        background:rgba(0,0,0,0.05);
        transition: all ease  1s
    }

    .action-box .btn svg{
        vertical-align:sub;
    }
    .action-box .btn-convert{
        /*color:#5983e8;
        font-size:12px !important;
        border: 1px solid #5983e8;*/
    }
    .action-box .btn:hover{
        border: 1px solid #666;
        background: white;
    }
`
export default function EditorComponent() {
    const latinEditor: any = useRef<string>("");
    const crylicEditor: any = useRef<string>("");
    const [latinValue, setLatinValue] = useState<string>("")
    const [crylicValue, setCrylicValue] = useState<string>("")
    const [latinObj, setLatinObj] = useState<IContentObject>({ htmlContent: "", textContent: "" })
    const [crylicObj, setCrylicObj] = useState<IContentObject>({ htmlContent: "", textContent: "" })



    const latinContentListener = (e: any) => {
        let htmlContent = e.target.innerHTML;

        setLatinObj({
            htmlContent: htmlContent,
            textContent: parseUtils.clearHTMLContent(htmlContent)
        })

        htmlContent += "<";

        htmlContent = htmlContent.replace(/(>?)(.[^>]+)(<)/g,
            (all: string, b: string, c: string, f: string): string => {
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
        htmlContent += "<";

        htmlContent = htmlContent.replace(/(>?)(.[^>]+)(<)/g,
            (all: string, b: string, c: string, f: string): string => {
                let parsed_str = parseUtils.parseToLatin(c);
                return String(b + parsed_str + f);
            })
        htmlContent = htmlContent.slice(0, -1);

        setLatinValue(htmlContent)
        setLatinObj({
            htmlContent,
            textContent: parseUtils.clearHTMLContent(htmlContent)
        })

    }

    const copyListener = (text: string, section: string = "Lotincha matn") => {
        if (text) {
            const nvgtr: any = window.navigator;
            nvgtr.clipboard.writeText(text).then(function () {
                toast.info(section + " nusxasi Bufferga olindi !");
                // console.log('Async: Copying to clipboard was successful!');
            }, function (err: string) {
                toast.error(section + " nusxasini Bufferga olishda XATOLIK:" + err);
                // console.error('Async: Could not copy text: ', err);
            });
        } else {
            toast.error("Matnni kiriting!");
        }
    }

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

                    <EditorFooter>
                        <div className="count-info">
                            Lotincha matn: {latinObj.textContent.length} ta belgi
                        </div>
                        <div className="action-box">
                            <button className="btn" onClick={e => copyListener(crylicObj.htmlContent, "Kirilcha HTML-kontenti")}>
                                <CopyHTMLContentSVG title="To'liq(HTML bilan) nusxalash" color="#666" />
                            </button>
                            <button className="btn" onClick={e => copyListener(crylicObj.textContent, "Kirilcha matni(HTML siz)")}>
                                <CopyTextContentSVG title="Faqat matnni nusxalash" />
                            </button>
                        </div>
                    </EditorFooter>
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
                    <EditorFooter>
                        <div className="count-info">
                            Кирилча матн: {crylicObj.textContent.length} та белги
                        </div>
                        <div className="action-box">
                            <button className="btn" onClick={e => copyListener(crylicObj.htmlContent, "Kirilcha HTML-kontenti")}>
                                <CopyHTMLContentSVG title="Тўлиқ(HTML билан) нусхалаш" color="#666" />
                            </button>
                            <button className="btn" onClick={e => copyListener(crylicObj.textContent, "Kirilcha matni(HTML siz)")}>
                                <CopyTextContentSVG title="Фақат матнни нусхалаш" />
                            </button>
                            <button className="btn btn-convert hide">
                                <IconHandRightArrowSVG title="Лотинга ўгириш" color="#5983e8" />
                            </button>
                        </div>
                    </EditorFooter>
                </div>
            </EditorWrap>

            <div
                placeholder="Krilcha matn...">
                {crylicObj.htmlContent}
            </div>
        </>
    )
} 