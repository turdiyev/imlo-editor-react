import React from "react";
import * as parseUtils from "../../utils/parseUtils";
import {IContentObject} from "../../type/EditorTypes";

interface IProps {
    latinObj: IContentObject
}

export default function LatinWordsTableComponent({latinObj}: IProps) {
    const onlyText = parseUtils.clearLatinContent(latinObj.textContent);
    const allWords = onlyText.split(" ");

    return (
        <>
            <table>
                <tr>
                    <th>So'z</th>
                    <th>Slug</th>
                    <th>Natijaviy</th>
                </tr>
                {allWords.map((word: string, index: number) => (
                    <tr key={index}>
                        <td>{word}</td>
                        <td>{parseUtils.parseLatinAsSlug(word)}</td>
                        <td>{parseUtils.getOnlyWords(word)}</td>
                    </tr>
                ))}
            </table>
            {onlyText}
        </>)
}