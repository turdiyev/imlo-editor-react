import {parseToCrylic, parseToLatin} from "../parseUtils";

const test_array: string[][] = [
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
test("parseUtils.parseToLatin(crylicText) test  ", () => {
    test_array.map((inArray) => {
        expect(parseToLatin(inArray[0])).toEqual(inArray[1])
    })
})

test("parseUtils.parseToCrylic(latinText) test", () => {
    test_array.map((inArray) => {
        expect(parseToCrylic(inArray[1])).toEqual(inArray[0])
    })
})