import React from 'react'
import * as parseUtils from "../../utils/parseUtils"
// import * as spellCheckUtils from "../../utils/spellCheckUtils"
import styled from 'styled-components';
import CopyHTMLContentSVG from "./../svg/CopyHTMLContentSVG"
import CopyTextContentSVG from "../svg/CopyTextContentSVG"
// import IconHandLeftArrowSVG from "./svg/IconHandLeftArrowSVG"
import IconTrashSVG from "../svg/IconTrashSVG"
import {debounce} from 'lodash';
import {IContentObject} from "../../type/EditorTypes";
import LatinWordsTableComponent from "./LatinWordsTableComponent";
import IconCheckSVG from "../svg/IconCheckSVG";

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
    
    .action-box .btn-spell-check{
        /*border: 1px solid #488740;*/
        background: rgba(10,255,20, 0.2);
    }
    .action-box .btn-spell-check:hover{
        border: 1px solid #488740 !important;
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
            const textContent = parseUtils.clearHTMLContent(htmlContent)
            // debugger;
            // if (isEmpty(textContent)) return;

            console.log("Latin -> Kril ...................")
            setLatinObj({htmlContent, textContent})

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

    const debouncedLatinListener = debounce(latinContentListener, 300)

    // const verifyListener = () => {
    //     // setLat
    //     let htmlContent = latinEditor.current.innerHTML;
    //     htmlContent += "<";
    //     const incorrect_words: string[] = spellCheckUtils.findLatinIncorrectWords(latinEditor.current.innerText);
    //
    //     htmlContent  = htmlContent.replace(/<span class="incorrect-word">([^<]+)<\/span>/g, "$1")
    //     htmlContent = htmlContent.replace(/(>?)(.[^>]+)(<)/g,
    //         (all: string, b: string, c: string, f: string): string => {
    //             let parsed_str = parseUtils.changeSingleQuotes(c);
    //             // parsed_str = parsed_str.replace(/&([^;]+);/g, (all: string, first: string) =>
    //             //     "&" + parseUtils.parseToLatin(first) + ";")
    //
    //             incorrect_words.map((word: string) => {
    //                 parsed_str = parsed_str.replace(
    //                     new RegExp(`\\b(${word})\\b`, 'ig'),
    //                     "<span class=\"incorrect-word\">$1</span>"
    //                 )
    //             })
    //             return String(b + parsed_str + f);
    //         })
    //     htmlContent = htmlContent.slice(0, -1);
    //
    //     console.log("INCORRECT words -------", incorrect_words);
    //
    //     changeLatinData(htmlContent)
    // }
    return (
        <div className='editable-box'>
            <div ref={latinEditor}
                 contentEditable={true}
                 className="editable latin-editor"
                 placeholder="Lotincha matn..."
                 onKeyUp={(e: any) => debouncedLatinListener(e.target.innerHTML)}
                 onFocus={(e: any) => debouncedLatinListener(e.target.innerHTML)}
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
                    {/*{<button className="btn btn-spell-check"*/}
                            {/*onClick={e => verifyListener()}>*/}
                        {/*<IconCheckSVG color="#488740" />*/}
                    {/*</button>}*/}
                </div>
            </EditorFooter>
            {false && <LatinWordsTableComponent latinObj={latinObj}/>}
        </div>
    )
} 