import lzString from "lz-string"
import { startsWith } from "lodash"
import json from "./latin_word_object_list.json"
import BASE64_LATIN_WORDS_STRING from "./latinWordsBase64"
import { WordObject } from "../type/WordObjectType"
import { parseLatinAsSlug } from "../utils/parseUtils.js";

export {json}
// export const LATIN_IMLO_DICT: string = lzString.compressToBase64(JSON.stringify(json));
// export const LATIN_IMLO_BASE64:string = lzString.compressToBase64(JSON.stringify(words));

export const compressToBase64 = (jsonValue: any): string => {
    return lzString.compressToBase64(JSON.stringify(jsonValue))
}
export const decompressFromBase64 = (str: string): WordObject[] => {
    return JSON.parse(lzString.decompressFromBase64(str))
}

export const LATIN_IMLO_DICT: WordObject[] = decompressFromBase64(BASE64_LATIN_WORDS_STRING)
export const LATIN_IMLO_ARRAY: string[] = LATIN_IMLO_DICT.map((obj: WordObject) => obj.name);


// export const test = () => {
//     const txt: string = compressToBase64(json);
//     console.log(txt);
//     return decompressFromBase64(txt)
// }

// console.log(test())