import React, { useRef, useState, ReactNode } from 'react'
import * as parseUtils from "../utils/parseUtils"
import styled from 'styled-components';
import CopyHTMLContentSVG from "./svg/CopyHTMLContentSVG"
import CopyTextContentSVG from "./svg/CopyTextContentSVG"
// import IconHandLeftArrowSVG from "./svg/IconHandLeftArrowSVG"
import IconHandLeftArrowSVG from "./svg/IconHandLeftArrowSVG"
import IconTrashSVG from "./svg/IconTrashSVG"
import LatinEditorComponent from "./editor/LatinEditorComponent"
import CrylicEditorComponent from "./editor/CrylicEditorComponent"
import { MainConfigContext, ISettings } from "../containers/HomeContainer"
import IconUnderlineSVG from "./svg/IconUnderlineSVG"
import { toast } from 'react-toastify';
import { Button } from 'react-native';

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
    &.vertical-layout{
         flex-direction:column;
        .editable-box{
              width:100% !important;
              .editable{
                height: 300px;
              }
        }
     }
     
    &.page-layout{
        position:relative;
        margin:-17px 0 15px;
        .editable-box{
              width:100% !important;
              margin:0;
              .editable{
                height:auto;
                min-height:375px;
                font-size:25px;
                margin:0 !important;
                padding: 40px;
                /*background:transparent;*/
                box-shadow: none;
                border:none;
              }
        }
        .btn-page-convert{
            position:fixed;
            top:40%;
            right: 0;
            background:transparent;
            color: #999;
            text-align:center;
        }
     }
     
    .editable-box{
        width:50%;
        margin:2px 2px 15px;
        
    }
    .editable{
        display:block;
        background:white;
        height: 400px;
        padding:10px;
        box-shadow: inset 0 0 5px 2px rgba(0,0,0,0.03);
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
        color:#a5a5a5;
    }
`;
export default function EditorComponent() {
    const latinEditor: any = useRef<string>("");
    const crylicEditor: any = useRef<string>("");
    const [latinValue, setLatinValue] = useState<string>("")
    const [crylicValue, setCrylicValue] = useState<string>("")
    const [latinObj, setLatinObj] = useState<IContentObject>({ htmlContent: "", textContent: "" })
    const [crylicObj, setCrylicObj] = useState<IContentObject>({ htmlContent: "", textContent: "" })

    const changeCrylicData = (htmlContent: string) => {
        if (crylicEditor.current) crylicEditor.current.innerHTML = htmlContent;
        setCrylicValue(htmlContent)
        setCrylicObj({
            htmlContent,
            textContent: parseUtils.clearHTMLContent(htmlContent)
        })
    }

    const changeLatinData = (htmlContent: string) => {
        if (latinEditor.current) latinEditor.current.innerHTML = htmlContent;
        setLatinValue(htmlContent)
        setLatinObj({
            htmlContent,
            textContent: parseUtils.clearHTMLContent(htmlContent)
        })
    }

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
                parsed_str = parsed_str.replace(/&([^;]+);/g, (all, first) =>
                    "&" + parseUtils.parseToLatin(first) + ";")
                return String(b + parsed_str + f);
            })
        htmlContent = htmlContent.slice(0, -1);
        changeCrylicData(htmlContent)

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

    const trashListener = (changeContentData: (s: string) => void) => {
        changeContentData("")
    }

    return (
        <MainConfigContext.Consumer>
            {([config, setConfig]) => {

                const editorArray: ReactNode[] = [
                    <LatinEditorComponent
                        changeCrylicData={changeCrylicData}
                        changeLatinData={changeLatinData}
                        trashListener={trashListener}
                        copyListener={copyListener}
                        latinObj={latinObj}
                        setLatinObj={setLatinObj}
                        latinValue={latinValue}
                        latinEditor={latinEditor}
                    />,
                    <CrylicEditorComponent
                        changeCrylicData={changeCrylicData}
                        changeLatinData={changeLatinData}
                        trashListener={trashListener}
                        copyListener={copyListener}
                        crylicObj={crylicObj}
                        setCrylicObj={setCrylicObj}
                        crylicValue={crylicValue}
                        crylicEditor={crylicEditor}
                    />]

                const convertListener = (e: any) => {
                    if (crylicEditor.current) crylicEditor.current.focus();
                    if (latinEditor.current) latinEditor.current.focus();
                    setConfig({
                        ...config,
                        visibleEditorIndex: Number(!config.visibleEditorIndex)
                    })
                }
                return config.pageLayout ? (
                    <EditorWrap className={'page-layout'}>
                        {config.visibleEditorIndex === 0 && editorArray[Number(!config.latinFirst)]}
                        {config.visibleEditorIndex === 1 && editorArray[Number(config.latinFirst)]}
                        {config.pageLayout && <button className="btn btn-page-convert" onClick={convertListener}>
                            <IconHandLeftArrowSVG size={48} color="#5983e8"/> <br/>
                            O'girish
                        </button>}
                    </EditorWrap>
                ) : (
                        <EditorWrap className={config.verticalLayout ? 'vertical-layout' : config.pageLayout ? 'page-layout' : ''}>
                            {editorArray[Number(!config.latinFirst)]}
                            {editorArray[Number(config.latinFirst)]}
                        </EditorWrap>
                    )
            }}
        </MainConfigContext.Consumer>
    )
} 