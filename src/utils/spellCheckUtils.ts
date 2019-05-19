import { LATIN_IMLO_ARRAY } from "../constants/latinWords"
import * as parseUtils from "./parseUtils"
import { includes, uniqBy, toLower } from "lodash"


export const findLatinIncorrectWords = (text: string): string[] => {
    const clearedLatinText: string = parseUtils.clearLatinContent(text);
    const word_list = clearedLatinText.split(" ");
    console.log("WOrdList = ", word_list);
    return uniqBy(word_list.filter((word: string) => !includes(LATIN_IMLO_ARRAY, word)), toLower);
}
