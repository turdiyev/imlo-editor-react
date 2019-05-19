import { parseToCrylic, parseToLatin, SYMBOL_TUTUQ } from "../parseUtils";

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
    ["сентябрь", "sentyabr"],
    ["Кенгашнинг", "Kengashning"],
    ["сессиясида", "sessiyasida"],
    ["ўзбек", "oʻzbek"],
    ["деган", "degan"],
    ["неча", "necha"],
    ["белгиланган", "belgilangan"],
    ["девальвация", "devalvatsiya"],
    ["мўътабар", "moʻtabar"],
    ["мўъжиза", "moʻjiza"],
    ["исҳоқ", `is${SYMBOL_TUTUQ}hoq`],
    ["большевик", "bolshevik"],
    ["брильянт", "brilyant"],
    ["дельфин", "delfin"],
    ["медальон", "medalon"],
    ["меньшевик", "menshevik"],
    ["октябрь", "oktabr"],
    ["премьера", "premyera"],
    ["руль", "rul"],
    ["цент", "sent"],
    ["сентабр", "sentabr"],
    ["сентябрь", "sentyabr"],
    ["консульт", "konsult"],
    ["таҳсин", "tahsin"]
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