import React, {useRef, useState, Ref} from 'react'
import * as parseUtils from "../../utils/parseUtils"
import styled from 'styled-components';
import CopyHTMLContentSVG from "./../svg/CopyHTMLContentSVG"
import CopyTextContentSVG from "../svg/CopyTextContentSVG"
// import IconHandLeftArrowSVG from "./svg/IconHandLeftArrowSVG"
import IconHandRightArrowSVG from "../svg/IconHandRightArrowSVG"
import IconTrashSVG from "../svg/IconTrashSVG"
import {MainConfigContext, ISettings} from "../../containers/HomeContainer"
import IconUnderlineSVG from "../svg/IconUnderlineSVG"
import {toast} from 'react-toastify';

interface IContentObject {
    htmlContent: string,
    textContent: string
}

interface IProps {
    changeCrylicData: (s: string) => void,
    changeLatinData: (s: string) => void,
    trashListener: (s: any) => void,
    copyListener: (s: string, c: string) => void,
    latinObj: IContentObject,
    setLatinObj: (d: IContentObject) => void,
    latinValue: string,
    latinEditor: any
}

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
export default function LatinEditorComponent({
                                                 latinEditor, latinObj, latinValue, setLatinObj,
                                                 changeCrylicData, changeLatinData, trashListener, copyListener
                                             }: IProps) {


    const latinContentListener = (htmlContent: string) => {
        // let htmlContent = e.target.innerHTML;
        setLatinObj({
            htmlContent: htmlContent,
            textContent: parseUtils.clearHTMLContent(htmlContent)
        })

        htmlContent += "<";

        htmlContent = htmlContent.replace(/(>?)(.[^>]+)(<)/g,
            (all: string, b: string, c: string, f: string): string => {
                let parsed_str = parseUtils.parseToCrylic(c);
                parsed_str = parsed_str.replace(/&([^;]+);/g, (all: string, first: string) =>
                    "&" + parseUtils.parseToLatin(first) + ";")
                return String(b + parsed_str + f);
            })
        htmlContent = htmlContent.slice(0, -1);
        changeCrylicData(htmlContent)

    }

    const onlyText = parseUtils.clearLatinContent(latinObj.textContent);
    const allWords = onlyText.split(" ");
    return (
        <div className='editable-box'>
            <div ref={latinEditor}
                 contentEditable={true}
                 className="editable latin-editor"
                 placeholder="Lotincha matn..."
                 onKeyUp={(e: any) => latinContentListener(e.target.innerHTML)}
                 onFocus={(e: any) => latinContentListener(e.target.innerHTML)}
                 dangerouslySetInnerHTML={{__html: latinValue}}
            >
            </div>
            <EditorFooter>
                <div className="count-info">
                    Lotincha matn: {latinObj.textContent.length} ta belgi
                </div>
                <div className="action-box">
                    <button className="btn" onClick={e => trashListener(changeLatinData)}>
                        <IconTrashSVG title="Тозалаш" color="#666"/>
                    </button>
                    <button className="btn" onClick={e => copyListener(latinObj.htmlContent, "Kirilcha HTML-kontenti")}>
                        <CopyHTMLContentSVG title="To'liq(HTML bilan) nusxalash" color="#666"/>
                    </button>
                    <button className="btn"
                            onClick={e => copyListener(latinObj.textContent, "Kirilcha matni(HTML siz)")}>
                        <CopyTextContentSVG title="Faqat matnni nusxalash"/>
                    </button>
                </div>
            </EditorFooter>
            <table>
                <tr>
                    <th>So'z</th>
                    <th>Slug</th>
                    <th>Natijaviy</th>
                </tr>
                {allWords.map((word:string, index:number) => (
                    <tr key={index}>
                        <td>{word}</td>
                        <td>{parseUtils.parseLatinAsSlug(word)}</td>
                        <td>{parseUtils.getOnlyWords(word)}</td>
                    </tr>
                ))}
            </table>
            {onlyText}
        </div>
    )
} 