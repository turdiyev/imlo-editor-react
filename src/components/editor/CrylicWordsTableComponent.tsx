import React from "react";
import * as parseUtils from "../../utils/parseUtils";
import {IContentObject} from "../../type/EditorTypes";

interface IProps {
    crylicObj: IContentObject
}

export default function CrylicWordsTableComponent({crylicObj}: IProps) {
    const onlyText = parseUtils.clearCrylicContent(crylicObj.textContent);
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
                        <td>{parseUtils.parseToLatinSlug(word)}</td>
                        <td>{parseUtils.getOnlyWords(word)}</td>
                    </tr>
                ))}
            </table>
            {onlyText}
        </>)
}