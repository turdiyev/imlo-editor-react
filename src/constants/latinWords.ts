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



// const parsed_list = latinCrylicWords.filter(word => {


//     return word.includes("ь") && word.search(/\w/g) == -1

// }).map(word => {
//     const latin = parseToLatin(word);
//     return { word, parsed: latin, isCorrectLatin: LATIN_IMLO_ARRAY.includes(latin) }
// })
// console.log(parsed_list)

// console.log(JSON.stringify(parsed_list.map(s => [s.word, s.parsed])))

// const filtered_word_slugs: string[] = [];
// const filtered_words: WordObject[] = [];
// json.forEach((item: WordObject, index: number) => {
//     const arr = item.name.split(" ").map((part: string) => {
//         const slug = parseLatinAsSlug(part)
//         if (!filtered_word_slugs.includes(slug)) {
//             filtered_words.push({ 
//                 id: (filtered_words.length+1),
//              name: part,
//                  slug, 
//                  info: item.info,
//                   full_word: item.name,
//                   variants:item.name!=part?[item.name]:[] 
//                   })
//             filtered_word_slugs.push(slug)
//         }else{
//             const foundIndex = filtered_word_slugs.indexOf(slug)
//             const foundWordItem = filtered_words[foundIndex];
//             if(foundWordItem.name != item.name){
//                 filtered_words[foundIndex].variants.push(item.name)
//             }
//         }
//     });
// })


// console.log(JSON.stringify(filtered_words,2,2))