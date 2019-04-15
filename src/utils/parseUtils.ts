export const CRYLIC_LETTERS = ["А", "а", "Б", "б", "В", "в", "Г", "г", "Д", "д", "Е", "е", "Ё", "ё", "Ж", "ж", "З", "з", "И", "и", "Й", "й", "К", "к", "Л", "л", "М", "м", "Н", "н", "О", "о", "П", "п", "Р", "р", "С", "с", "Т", "т", "У", "у", "Ф", "ф", "Х", "х", "Ц", "ц", "Ч", "ч", "Ш", "ш", "Ъ", "ъ", "Ь", "ь", "Э", "э", "Ю", "ю", "Я", "я", "Ў", "ў", "Қ", "қ", "Ғ", "ғ", "Ҳ", "ҳ"]
export const LATIN_LETTERS = ["A", "a", "B", "b", "V", "v", "G", "g", "D", "d", "Ye", "ye", "Yo", "yo", "J", "j", "Z", "z", "I", "i", "Y", "y", "K", "k", "L", "l", "M", "m", "N", "n", "O", "o", "P", "p", "R", "r", "S", "s", "T", "t", "U", "u", "F", "f", "X", "x", "S", "s", "Ch", "ch", "Sh", "sh", "ʼ", "ʼ", "", "", "E", "e", "Yu", "yu", "Ya", "ya", "Oʻ", "oʻ", "Q", "q", "Gʻ", "gʻ", "H", "h"]
export const CRYLIC_LETTER_PAIRS: ReadonlyArray<[{}, {}]> = [["А", "A"], ["а", "a"], ["Б", "B"], ["б", "b"], ["В", "V"], ["в", "v"], ["Г", "G"], ["г", "g"], ["Д", "D"], ["д", "d"], ["Е", "Ye"], ["е", "ye"], ["Ё", "Yo"], ["ё", "yo"], ["Ж", "J"], ["ж", "j"], ["З", "Z"], ["з", "z"], ["И", "I"], ["и", "i"], ["Й", "Y"], ["й", "y"], ["К", "K"], ["к", "k"], ["Л", "L"], ["л", "l"], ["М", "M"], ["м", "m"], ["Н", "N"], ["н", "n"], ["О", "O"], ["о", "o"], ["П", "P"], ["п", "p"], ["Р", "R"], ["р", "r"], ["С", "S"], ["с", "s"], ["Т", "T"], ["т", "t"], ["У", "U"], ["у", "u"], ["Ф", "F"], ["ф", "f"], ["Х", "X"], ["х", "x"], ["Ц", "S"], ["ц", "s"], ["Ч", "Ch"], ["ч", "ch"], ["Ш", "Sh"], ["ш", "sh"], ["Ъ", "ʼ"], ["ъ", "ʼ"], ["Ь", ""], ["ь", ""], ["Э", "E"], ["э", "e"], ["Ю", "Yu"], ["ю", "yu"], ["Я", "Ya"], ["я", "ya"], ["Ў", "Oʻ"], ["ў", "oʻ"], ["Қ", "Q"], ["қ", "q"], ["Ғ", "Gʻ"], ["ғ", "gʻ"], ["Ҳ", "H"], ["ҳ", "h"]]
export const LATIN_LETTER_PAIRS: ReadonlyArray<[{}, {}]> = [["A", "А"], ["a", "а"], ["B", "Б"], ["b", "б"], ["V", "В"], ["v", "в"], ["G", "Г"], ["g", "г"], ["D", "Д"], ["d", "д"], ["Ye", "Е"], ["ye", "е"], ["Yo", "Ё"], ["yo", "ё"], ["J", "Ж"], ["j", "ж"], ["Z", "З"], ["z", "з"], ["I", "И"], ["i", "и"], ["Y", "Й"], ["y", "й"], ["K", "К"], ["k", "к"], ["L", "Л"], ["l", "л"], ["M", "М"], ["m", "м"], ["N", "Н"], ["n", "н"], ["O", "О"], ["o", "о"], ["P", "П"], ["p", "п"], ["R", "Р"], ["r", "р"], ["S", "С"], ["s", "с"], ["T", "Т"], ["t", "т"], ["U", "У"], ["u", "у"], ["F", "Ф"], ["f", "ф"], ["X", "Х"], ["x", "х"], ["Ts", "Ц"], ["ts", "ц"], ["Ch", "Ч"], ["ch", "ч"], ["Sh", "Ш"], ["sh", "ш"], ["ʼ", "Ъ"], ["ʼ", "ъ"], ["E", "Е"], ["e", "е"], ["Ei", "Э"], ["ei", "э"], ["Yu", "Ю"], ["yu", "ю"], ["Ya", "Я"], ["ya", "я"], ["Oʻ", "Ў"], ["oʻ", "ў"], ["Q", "Қ"], ["q", "қ"], ["Gʻ", "Ғ"], ["gʻ", "ғ"], ["H", "Ҳ"], ["h", "ҳ"]]

export const CRYLIC_MAP: Map<{}, {}> = new Map(CRYLIC_LETTER_PAIRS)
export const LATIN_MAP: Map<{}, {}> = new Map(LATIN_LETTER_PAIRS)
import { toLower, trim } from "lodash"

export const clearCrylicContent = (content: string) => {
    // const lower_content = content.toLowerCase();cleaned_content
    // .replace(/([\d\,\.\\\/\’\"\”\“\«\»\%\?\_\+\=\!\:\;\]\[\{\}\(\)\*\•\✅])/g, ' ')

    return trim(content)
        .replace(/[^\u0400-\u04FF\-\s]/g, ' ')
        .replace(/[a-zA-Z]/g, '')
        .replace(/\–\—\-/g, '-')
        .replace(/\s{2,}/g, " ")
        .replace(/\B-?([\u0400-\u04FF\w]+\-?[\u0400-\u04FF\w]+)-?\B/g, "$1");
}

export const clearHTMLContent = (content: string) => {
    // const lower_content = content.toLowerCase();cleaned_content
    // .replace(/([\d\,\.\\\/\’\"\”\“\«\»\%\?\_\+\=\!\:\;\]\[\{\}\(\)\*\•\✅])/g, ' ')

    return trim(content)
        .replace(/<[^>]+>/g, '')
        .replace(/&[^;]+;/g, ' ')
        .replace(/[^\u0400-\u04FF\w\d\-\s]/g, ' ')
        .replace(/\–\—\-/g, '-')
        .replace(/\s{2,}/g, " ")
}

export const clearLatinContent = (content: string) => {
    // const lower_content = content.toLowerCase();cleaned_content
    // .replace(/([\d\,\.\\\/\’\"\”\“\«\»\%\?\_\+\=\!\:\;\]\[\{\}\(\)\*\•\✅])/g, ' ')

    return trim(content)
        .replace(/[^a-zA-Z\'\`\ʼ\ʻ\‘\'\-\s]/g, ' ')
        .replace(/[\u0400-\u04FF]/g, '')
        .replace(/\–\—\-/g, '-')
        .replace(/\s{2,}/g, " ")
        .replace(/\B-?([\w]+\-?[\w]+)-?\B/g, "$1");
}

export const parseLatinAsSlug = (string: string) => {
    string = trim(string)
    string = string
        .replace(/\–\—\-/g, '-')
        .replace(/[\u0400-\u04FF]+/g, '')
        .replace(/\B-?([\w]+\-?[\w]+)-?\B/g, "$1")
        .replace(/['`ʼʻ‘']/g, '-')
        .replace(/[^a-zA-Z\-\s]/g, ' ')
    string = toLower(string).replace(/\s/g, '-')
    return string;
}

export const parseToLatin = (crylic_text: string = ""): string => {
    let result_text: string = ""

    crylic_text = crylic_text.replace(/([с])ҳ/ig, '$1ʼh')
    crylic_text = crylic_text.replace(/([ў])ъ/ig, '$1')
    crylic_text.split("").map((letter: string) => {
        const parsed_letter = CRYLIC_MAP.get(letter);
        result_text += typeof parsed_letter == "string" ? parsed_letter : letter;
    })
    result_text = result_text.replace(/([^aeiuo])ye/ig, '$1e')

    return result_text;
}

export const parseToLatinSlug = (crylic_text: string): string => {
    let latin_text = parseToLatin(crylic_text);
    latin_text = parseLatinAsSlug(latin_text)

    return latin_text;
}
export const parseToCrylic = (latin_text: string = ""): string => {
    let result_text: string = ""

    latin_text = latin_text.replace(/\b([e])/ig, (match: string, first: string) => {
        return String(LATIN_MAP.get(first + 'i'))
    })
    latin_text = latin_text.replace(/([aeiuo])e/ig, '$1э')
    
    latin_text = latin_text.replace(/([y])e/ig, (match: string, first: string) => {
        return String(LATIN_MAP.get(first + 'e'))
    })

    latin_text = latin_text.replace(/([y])u/ig, (match: string, first: string) => {
        return String(LATIN_MAP.get(first + 'u'))
    })

    latin_text = latin_text.replace(/([y])a/ig, (match: string, first: string) => {
        return String(LATIN_MAP.get(first + 'a'))
    })

    latin_text = latin_text.replace(/([o])(['`ʼʻ‘])/ig, (match: string, first: string, second: string) => {
        return String(LATIN_MAP.get(first + 'ʻ'))
    })

    latin_text = latin_text.replace(/([g])(['`ʼʻ‘])/ig, (match: string, first: string, second: string) => {
        return String(LATIN_MAP.get(first + 'ʻ'))
    })

    latin_text = latin_text.replace(/([y])o/ig, (match: string, first: string, second: string) => {
        return String(LATIN_MAP.get(first + 'o'))
    })

    latin_text = latin_text.replace(/([s])h/ig, (match: string, first: string) => {
        return String(LATIN_MAP.get(first + 'h'))
    })

    latin_text = latin_text.replace(/([s])(['`ʼʻ‘])h/ig, (match: string, first: string) => {
        return String(LATIN_MAP.get(first)) + String(LATIN_MAP.get('h'))
    })

    latin_text = latin_text.replace(/([c])h/ig, (match: string, first: string) => {
        return String(LATIN_MAP.get(first + 'h'))
    })


    latin_text = latin_text.replace(/([y])o/ig, (match: string, first: string) => {
        return String(LATIN_MAP.get(first + 'o'))
    })

    latin_text = latin_text.replace(/(['`ʼʻ‘])/ig, (match: string, first: string, second: string) => {
        return String(LATIN_MAP.get('ʼ'))
    })


    latin_text.split("").map((letter: string) => {
        const parsed_letter = LATIN_MAP.get(letter);
        result_text += typeof parsed_letter == "string" ? parsed_letter : letter;
    })

    result_text = result_text.replace(/([ў])([тж])/ig, (match: string, first: string, second: string) => {
        return String(first + 'ъ' + second)
    })
    return result_text;
}

const test_array = [
    ["елкан", "yelkan"],
    ["Елкан", "Yelkan"],
    ["ер", "yer"],
    ["Ер", "Yer"],
    ["Шерзод Шерматов", "Sherzod Shermatov"],
    ["бюджети", "byudjeti"],
    ["Назарбоевнинг", "Nazarboyevning"],
    ["Мирзиёев", "Mirziyoyev"],
    ["ечим", "yechim"],
    ["сентябр", "sentyabr"],
    ["Кенгашнинг", "Kengashning"],
    ["сессиясида", "sessiyasida"],
    ["ўзбек", "oʻzbek"],
    ["деган", "degan"],
    ["неча", "necha"],
    ["белгиланган", "belgilangan"],
    ["мўътабар", "moʻtabar"],
    ["мўъжиза", "moʻjiza"],
    ["исҳоқ", "is'hoq"],
]
export const testParseLatin = () => {
    return test_array.map(ar => ({
        ok: parseToLatin(ar[0]) == ar[1],
        parsed: parseToLatin(ar[0]),
        origin: ar[1]
    }))
}

export const testParseCrylic = () => {
    return test_array.map(ar => ({
        ok: parseToCrylic(ar[1]) == ar[0],
        parsed: parseToCrylic(ar[1]),
        origin: ar[0]
    }))
}