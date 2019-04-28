import React, { useRef, useState, Ref } from 'react'
import * as parseUtils from "../../utils/parseUtils"
import styled from 'styled-components';
import CopyHTMLContentSVG from "../svg/CopyHTMLContentSVG"
import CopyTextContentSVG from "../svg/CopyTextContentSVG"
// import IconHandLeftArrowSVG from "./svg/IconHandLeftArrowSVG"
import IconHandRightArrowSVG from "../svg/IconHandRightArrowSVG"
import IconTrashSVG from "../svg/IconTrashSVG"
import { MainConfigContext, ISettings } from "../../containers/HomeContainer"
import IconUnderlineSVG from "../svg/IconUnderlineSVG"
import { toast } from 'react-toastify';

interface IContentObject {
    htmlContent: string,
    textContent: string
}
interface IProps {
    changeCrylicData: (s: string) => void,
    changeLatinData: (s: string) => void,
    trashListener: (s: any) => void,
    copyListener: (s: string, c: string) => void,
    crylicObj: IContentObject,
    setCrylicObj: (d: IContentObject) => void,
    crylicValue: string,
    crylicEditor: any
}


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
export default function CrylicEditorComponent({ crylicEditor, crylicObj, crylicValue, setCrylicObj,
    changeCrylicData, changeLatinData, trashListener, copyListener }: IProps) {

    const crylicContentListener = (htmlContent: string) => {
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

        changeLatinData(htmlContent)
    }


    const onlyText = parseUtils.clearCrylicContent(crylicObj.textContent);
    const allWords = onlyText.split(" ");
    return (
        <div className='editable-box'>
            <div ref={crylicEditor}
                contentEditable={true}
                className="editable crylic-editor"
                placeholder="Krilcha matn..."
                onKeyUp={(e: any) => crylicContentListener(e.target.innerHTML)}
                onFocus={(e: any) => crylicContentListener(e.target.innerHTML)}
                dangerouslySetInnerHTML={{ __html: crylicValue }}>
            </div>
            <EditorFooter>
                <div className="count-info">
                    Кирилча матн: {crylicObj.textContent.length} та белги
                        </div>
                <div className="action-box">
                    <button className="btn" onClick={e => trashListener(changeCrylicData)}>
                        <IconTrashSVG title="Тозалаш" color="#666" />
                    </button>
                    <button className="btn" onClick={e => copyListener(crylicObj.htmlContent, "Kirilcha HTML-kontenti")}>
                        <CopyHTMLContentSVG title="Тўлиқ(HTML билан) нусхалаш" color="#666" />
                    </button>
                    <button className="btn" onClick={e => copyListener(crylicObj.textContent, "Kirilcha matni")}>
                        <CopyTextContentSVG title="Фақат матнни нусхалаш" />
                    </button>
                    <button className="btn btn-convert hide">
                        <IconHandRightArrowSVG title="Лотинга ўгириш" color="#5983e8" />
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
                        <td>{parseUtils.parseToLatinSlug(word)}</td>
                        <td>{parseUtils.getOnlyWords(word)}</td>
                    </tr>
                ))}
            </table>
            {onlyText}
        </div>
    )
} 