import {toLower, toUpper, trim, upperFirst} from "lodash"

export const SYMBOL_TUTUQ = "ʼ";
export const SYMBOL_FOR_OG = "ʻ";

export const CRYLIC_LETTERS = ["А", "а", "Б", "б", "В", "в", "Г", "г", "Д", "д", "Е", "е", "Ё", "ё", "Ж", "ж", "З", "з", "И", "и", "Й", "й", "К", "к", "Л", "л", "М", "м", "Н", "н",
    "О", "о", "П", "п", "Р", "р", "С", "с", "Т", "т", "У", "у", "Ф", "ф", "Х", "х", "Ц", "ц", "Ч", "ч", "Ш", "ш", "Ъ", "ъ", "Ь", "ь", "Э", "э", "Ю", "ю", "Я", "я", "Ў", "ў", "Қ", "қ", "Ғ", "ғ", "Ҳ", "ҳ"]
export const LATIN_LETTERS = ["A", "a", "B", "b", "V", "v", "G", "g", "D", "d", "Ye", "ye", "Yo", "yo", "J", "j", "Z", "z", "I", "i", "Y", "y", "K", "k", "L", "l", "M", "m", "N", "n", "O",
    "o", "P", "p", "R", "r", "S", "s", "T", "t", "U", "u", "F", "f", "X", "x", "S", "s", "Ch", "ch", "Sh", "sh", SYMBOL_TUTUQ, SYMBOL_TUTUQ, "", "", "E", "e", "Yu", "yu", "Ya", "ya", "Oʻ", "oʻ", "Q", "q", "Gʻ", "gʻ", "H", "h"]
export const CRYLIC_LETTER_PAIRS: ReadonlyArray<[string, string]> = [["А", "A"], ["а", "a"], ["Б", "B"], ["б", "b"], ["В", "V"], ["в", "v"], ["Г", "G"], ["г", "g"], ["Д", "D"], ["д", "d"], ["Е", "Ye"], ["е", "ye"],
    ["Ё", "Yo"], ["ё", "yo"], ["Ж", "J"], ["ж", "j"], ["З", "Z"], ["з", "z"], ["И", "I"], ["и", "i"], ["Й", "Y"], ["й", "y"], ["К", "K"], ["к", "k"], ["Л", "L"], ["л", "l"], ["М", "M"], ["м", "m"], ["Н", "N"],
    ["н", "n"], ["О", "O"], ["о", "o"], ["П", "P"], ["п", "p"], ["Р", "R"], ["р", "r"], ["С", "S"], ["с", "s"], ["Т", "T"], ["т", "t"], ["У", "U"], ["у", "u"], ["Ф", "F"], ["ф", "f"], ["Х", "X"], ["х", "x"],
    ["Ц", "S"], ["ц", "s"], ["Ч", "Ch"], ["ч", "ch"], ["Ш", "Sh"], ["ш", "sh"], ["Ъ", SYMBOL_TUTUQ], ["ъ", SYMBOL_TUTUQ], ["Ь", ""], ["ь", ""], ["Э", "E"], ["э", "e"], ["Ю", "Yu"], ["ю", "yu"], ["Я", "Ya"], ["я", "ya"], ["Ў", "Oʻ"],
    ["ў", "oʻ"], ["Қ", "Q"], ["қ", "q"], ["Ғ", "Gʻ"], ["ғ", "gʻ"], ["Ҳ", "H"], ["ҳ", "h"]]
export const LATIN_LETTER_PAIRS: ReadonlyArray<[string, string]> = [["A", "А"], ["a", "а"], ["B", "Б"], ["b", "б"], ["V", "В"], ["v", "в"], ["G", "Г"], ["g", "г"], ["D", "Д"], ["d", "д"], ["Ye", "Е"], ["ye", "е"], ["Yo", "Ё"], ["yo", "ё"],
    ["J", "Ж"], ["j", "ж"], ["Z", "З"], ["z", "з"], ["I", "И"], ["i", "и"], ["Y", "Й"], ["y", "й"], ["K", "К"], ["k", "к"], ["L", "Л"], ["l", "л"], ["M", "М"], ["m", "м"], ["N", "Н"], ["n", "н"], ["O", "О"], ["o", "о"], ["P", "П"],
    ["p", "п"], ["R", "Р"], ["r", "р"], ["S", "С"], ["s", "с"], ["T", "Т"], ["t", "т"], ["U", "У"], ["u", "у"], ["F", "Ф"], ["f", "ф"], ["X", "Х"], ["x", "х"], ["Ts", "Ц"], ["ts", "ц"], ["Ch", "Ч"], ["ch", "ч"], ["Sh", "Ш"], ["sh", "ш"],
    [SYMBOL_TUTUQ, "ъ"], [SYMBOL_TUTUQ, "ъ"], ["E", "Е"], ["e", "е"], ["Ei", "Э"], ["ei", "э"], ["Yu", "Ю"], ["yu", "ю"], ["Ya", "Я"], ["ya", "я"], ["Oʻ", "Ў"], ["oʻ", "ў"], ["Q", "Қ"], ["q", "қ"], ["Gʻ", "Ғ"], ["gʻ", "ғ"], ["H", "Ҳ"], ["h", "ҳ"]]

export const CRYLIC_MAP: Map<string, string> = new Map(CRYLIC_LETTER_PAIRS)
export const LATIN_MAP: Map<string, string> = new Map(LATIN_LETTER_PAIRS)

export const RUSSIAN_YO_YU_YE_YA_LETTER_TERMS: ReadonlyArray<[string, string]> = [
    ["ключ", "kluch"],
    ["бюджет", "budjet"], ["костюм", "kastum"],
    ["бюллетень", "bulleten"], ["Людмила", "Ludmila"],
    ["Люксембург", "Luksemburg"],
    ["гастролёр", "gastrolor"], ["люкс", "luks"],
    ["гипюр", "gipur"], ["моллюска", "molluska"],
    ["дублёр", "dublor"], ["плюс", "plus"],
    ["ингалятор", "ingalator"], ["пряник", "pranik"],
    ["иллюзия", "illuziya"], ["парашют", "parashut"],
    ["иллюминатор", "illuminator"], ["пляж", "plaj"],
    ["кастрюлька", "kastrulka"], ["регулятор", "regulator"],
    ["катюша", "katusha"],
    ["клёш", "klosh"], ["салют", "salut"],
    ["клюква", "klukva"], ["сюжет", "sujet"],
    ["коляска", "kolaska"], ["сюита", "suita"],
    ["стажёр", "stajor"], ["люстра", "lustra"],
    ["фляга", "flagа"]
];

export const RUSSIAN_ь_LETTER_TERMS: ReadonlyArray<[string, string]> = [
    ["хмель", "xmel"],
    ["холодильник", "xolodilnik"],
    ["альманах", "almanax"],
    ["автомобильсозлик", "avtomobilsozlik"],
    ["премьер", "premer"],
    ["интерьер", "interer"],
    ["рельс", "rels"],
    ["досье", "dose"],
    ["карьера", "karera"],
    ["печь", "pech"],
    ["велопатруль", "velopatrul"],
    ["альянс", "alyans"],
    ["пульс", "puls"],
    ["пульт", "pult"],
    ["тунель", "tunel"],
    ["дуэль", "duel"],
    ["фильтр", "filtr"],
    ["котель", "kotel"],
    ["модельер", "modelyer"],
    ["павильон", "pavilon"],
    ["браконьер", "brakonyer"],
    ["консультант", "konsultant"],
    ["апостиль", "apostil"],
    ["маньяк", "manyak"],
    ["ультиматум", "ultimatum"],
    ["отель", "otel"],
    ["параллель", "parallel"],
    ["карьер", "karyer"],
    ["помощь", "pomosh"],
    ["нефть", "neft"],
    ["рельсости", "relsosti"],
    ["альянс", "alyans"],
    ["печенье", "pechenye"],
    ["Нобель", "Nobel"],
    ["Беларусь", "Belarus"],
    ["фильм", "film"],
    ["цоколь", "sokol"],
    ["циркуль", "sirkul"],

    ["Январь", "Yanvar"], ["Февраль", "Fevral"],
    ["Апрель", "Aprel"], ["Июнь", "Iyun"], ["Июль", "Iyul"], ["Сентябрь", "Sentabr"],
    ["Октябрь", "Oktabr"], ["Ноябрь", "Noyabr"], ["Декабрь", "Dekabr"]
]

export const RUSSIAN_EXTRA_LETTER_TERMS: ReadonlyArray<[string, string]> = [
    ["шовилламоқ", "shovullamoq"],
    ["нуқтаи назар", "nuqtayi nazar"],
    ["кўпдан-кўп", "koʻpdan koʻp"],
    ["сўз боши", "so'zboshi"],
    ["буғдой ранг", "bugʻdoyrang"],

]

export const RUSSIAN_TS_LETTER_TERMS: ReadonlyArray<[string, string]> = [
    ["шприц", "shpris"],

    ["антициклон", "antisiklon"],
    ["глицирин", "glitserin"],
    ["гербицит", "gerbitsid"],
    ["акция", "aksiya"],
    ["акциз", "aksiz"],
    ["акционер", "aksioner"],
    ["апелляция", "apellatsiya"],
    ["артикуляция", "artikulatsiya"],
    ["ассимиляция", "assimilatsiya"],
    ["аттракцион", "attraksion"],
    ["аттракцион", "attraksion"],
    ["боцман", "botsman"],
    ["вакцина", "vaksina"],
    ["герц", "gers"],
    ["дедукция", "deduksiya"],
    ["дезинфекция", "dezinfeksiya"],
    ["дезинфекция", "dezinfeksiya"],
    ["дирекция", "direksiya"],
    ["диссимиляция", "dissimilatsiya"],
    ["дистилляция", "distillatsiya"],
    ["дифференциал", "differensial"],
    ["инерция", "inersiya"],
    ["инстанция", "instansiya"],
    ["инсценировка", "inssenirovka"],
    ["интервенция", "intervensiya"],
    ["интервенция", "intervensiya"],
    ["инфекция", "infeksiya"],
    ["изоляция", "izolatsiya"],
    ["кальций", "kalsiy"],
    ["канцлер", "kansler"],
    ["кварц", "kvars"],
    ["квитанция", "kvitansiya"],
    ["коллекция", "kolleksiya"],
    ["конвенция", "konvensiya"],
    ["конверция", "konversiya"],
    ["консорциум", "konsorsium"],
    ["конструкция", "konstruksiya"],
    ["контрибутция", "kontributsiya"],
    ["конференц", "konferens"],
    ["концентр", "konsentr"],
    ["концепция", "konsepsiya"],
    ["концерн", "konsern"],
    ["концерт", "konsert"],
    ["концлагерь", "konslager"],
    ["коррупция", "korrupsiya"],
    ["коррупция", "korrupsiya"],

    ["лекция", "leksiya"],
    ["лекция", "leksiya"],
    ["лицей", "litsey"],
    ["лицензия", "litsenziya"],
    ["марганец", "marganes"],
    ["мотоцикл", "mototsikl"],
    ["ненец", "nenes"],

    ["пинцет", "pinset"],
    ["плацдарм", "platsdarm"],
    ["плацкарта", "platskarta"],
    ["принцип", "prinsip"],
    ["провинция", "provinsiya"],
    ["провинция", "provinsiya"],
    ["сценир", "ssenir"],

    ["реакци", "reaksi"],
    ["редукци", "reduksi"],
    ["резиденция", "rezidensiya"],
    ["рицарь", "ritsar"],
    ["санкция", "sanksiya"],
    ["селекци", "seleksi"],
    ["революци", "revolutsi"],

    ["сценарий", "ssenariy"],
    ["станци", "stansi"],

    ["танца", "tansa"],
    ["танца", "tansa"],


    ["француз", "fransuz"],
    ["функцияси", "funksiya"],
    ["фракция", "fraksiya"],

    ["цивилизация", "sivilizatsiya"],
    ["целлофан", "sellofan"],
    ["цемент", "sement"],
    ["центр", "sentr"],
    ["цилиндр", "silindr"],


    ["цезий", "seziy"],
    ["цейтнот", "seytnot"],
    ["целлофан", "sellofan"],
    ["целлюлоза", "selluloza"],
    ["цельсий", "selsiy"],
    ["цемент", "sement"],
    ["цензор", "senzor"],
    ["цензура", "senzura"],
    ["центнер", "sentner"],
    ["цех", "sex"],
    ["цивилизация", "sivilizatsiya"],
    ["цикл", "sikl"],
    ["цилиндр", "silindr"],
    ["цирк", "sirk"],
    ["циркуль", "sirkul"],
    ["цистерна", "sisterna"],
    ["цитрус", "sitrus"],


    ["офицер", "ofitser"],
    ["доцент", "dotsent"],
    ["цанга", "sanga"],
    ["цапфа", "sapfa"],
    ["цедра", "sedra"],
    ["целом", "selom"],
    ["цент", "sent"],
    ["ценз", "senz"],
    ["цеце", "setse"],
    ["цезура", "sezura"],
    ["цинга", "singa"],
    ["цинния", "sinniya"],
    ["цирроз", "sirroz"],
    ["циста", "sista"],
    ["цоколь", "sokol"],

    ["эволюци", "evolutsi"],
    ["энциклопедия", "ensiklopediya"],
    ["юриспруденция", "yurisprudensiya"],

]

export const RUSSIAN_TERMS: Map<string, string> = new Map([
        ...RUSSIAN_YO_YU_YE_YA_LETTER_TERMS,
        ...RUSSIAN_ь_LETTER_TERMS,
    ...RUSSIAN_EXTRA_LETTER_TERMS,
        ...RUSSIAN_TS_LETTER_TERMS
    ]
);
export const clearCrylicContent = (content: string) => {
    // const lower_content = content.toLowerCase();cleaned_content
    // .replace(/([\d\,\.\\\/\’\"\”\“\«\»\%\?\_\+\=\!\:\;\]\[\{\}\(\)\*\•\✅])/g, ' ')

    content = content
        .replace(/[^\u0400-\u04FF\-\s]/g, ' ')
        .replace(/[a-zA-Z]/g, '')
        .replace(/\–\—\-/g, '-')
        .replace(/\s{2,}/g, " ")
        .replace(/\B-?([\u0400-\u04FF\w]+\-?[\u0400-\u04FF\w]+)-?\B/g, "$1");

    return trim(content)
}

export const clearHTMLContent = (content: string) => {

    content = content
        .replace(/<[^>]+>/g, ' ')
        .replace(/&[^;]+;/g, ' ')
        .replace(/\–\—\-/g, '-')
        .replace(/\s{2,}/g, " ")

    return trim(content)
}

export const clearLatinContent = (content: string) => {

    content = content
        .replace(/['`ʼʻ‘']/g, 'ʻ')
        .replace(/[^a-zA-Zʻ\-\s]/g, ' ')
        .replace(/[\u0400-\u04FF]/g, ' ')
        .replace(/\–\—\-/g, '-')
        .replace(/\s{2,}/g, ' ')
        .replace(/\B-?([\w]+\-?[\w]+)-?\B/g, "$1")

    return trim(content)
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
export const getReplacementWithCaseSensitive = (oldValue: string, value: string): string => {
    switch (oldValue) {
        case toLower(oldValue):
            value = toLower(value);
            break;
        case toUpper(oldValue):
            value = toUpper(value);
            break;
        case upperFirst(oldValue):
            value = upperFirst(value);
            break;
    }
    return value;
}

export const parseRussianTermsToLatin = (crylic_text: string): string => {
    RUSSIAN_TERMS.forEach((value: string, key: string) => {
        const PATTERN = new RegExp(key, 'ig');
        const matchedArray = crylic_text.match(PATTERN);
        if (Boolean(matchedArray)) {
            crylic_text = crylic_text.replace(PATTERN, oldValue => getReplacementWithCaseSensitive(oldValue, value))
        }
    })
    return crylic_text;
}

export const parseRussianTermsToCrylic = (latin_text: string): string => {
    RUSSIAN_TERMS.forEach((value: string, key: string) => {
        const PATTERN = new RegExp(value, 'ig');
        if (latin_text.search(PATTERN) > -1) {
            latin_text = latin_text.replace(PATTERN, oldValue => getReplacementWithCaseSensitive(oldValue, key));
        }
    });

    return latin_text;
}

export const parseToLatin = (crylic_text: string = ""): string => {
    let result_text: string = ""

    crylic_text = parseRussianTermsToLatin(crylic_text)

    crylic_text = crylic_text.replace(/([с])ҳ/ig, `$1${SYMBOL_TUTUQ}h`)
    crylic_text = crylic_text.replace(/([ў])ъ/ig, '$1')
    crylic_text = crylic_text.replace(/([ь]е)/ig, '$1e')
    crylic_text = crylic_text.replace(/([иуўоае])ц([иуўоае])/ig, '$1ts$1')

    crylic_text.split("").map((letter: string) => {
        const parsed_letter = CRYLIC_MAP.get(letter);
        result_text += typeof parsed_letter == "string" ? parsed_letter : letter;
    })
    result_text = result_text.replace(/([^aeiuo\s])ye/ig, '$1e')

    return result_text;
}

export const parseToLatinSlug = (crylic_text: string): string => {
    let latin_text = parseToLatin(crylic_text);
    latin_text = parseLatinAsSlug(latin_text)

    return latin_text;
}
export const parseToCrylic = (latin_text: string = ""): string => {
    let result_text: string = ""

    latin_text = parseRussianTermsToCrylic(latin_text)

    latin_text = latin_text.replace(/\b([e])/ig, (match: string, first: string) => {
        return String(LATIN_MAP.get(first + 'i'))
    })
    latin_text = latin_text.replace(/([aeiuo])e/ig, '$1э')
    latin_text = latin_text.replace(/ts/g, 'ц')

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
        return String(LATIN_MAP.get(first + SYMBOL_FOR_OG))
    })

    latin_text = latin_text.replace(/([g])(['`ʼʻ‘])/ig, (match: string, first: string, second: string) => {
        return String(LATIN_MAP.get(first + SYMBOL_FOR_OG))
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

    latin_text = latin_text.replace(/([s])s([e])/ig, (match: string, first: string, second: string) => {
        return String(LATIN_MAP.get(first)) + String(LATIN_MAP.get('ts') + second)
    })

    latin_text = latin_text.replace(/(['`ʼʻ‘])/ig, (match: string, first: string, second: string) => {
        return String(LATIN_MAP.get(SYMBOL_TUTUQ))
    })


    latin_text.split("").map((letter: string) => {
        const parsed_letter = LATIN_MAP.get(letter);
        result_text += typeof parsed_letter == "string" ? parsed_letter : letter;
    })

    result_text = result_text.replace(/(м[ў])([тж])/ig, (match: string, first: string, second: string) => {
        return String(first + 'ъ' + second)
    })
    return result_text;
}


export const getOnlyWords = (str: string): string => {
    return str.replace(/[^a-zA-Z\d\u0400-\u04FF\-'`ʼʻ‘']/, ' ')
}




















const aa = []
// прототип, протест, сенсация, синдром, болт, платформа, счётчик, инфляция, космос, тара, блистер, аншлаг, датчик, меценат, интерьер, демонтаж, табел, дирекция, эффект, эффектив, телеэффект, видеошутинг, фотофиксация, заявка, эстакада, эскалатор, лифт, шоссе, туннел, линия, светофор, таймер, фон, коммерция, оккупация, идентификация, ассоциация, оптимизм, шар, шоу, инфраструктура, дисбаланс, навигация, доза, креатив, донор, рельс, бойкот, аномал, аномалия, водопровод, канализация, канализацион, формат, татами, прицеп, камбэк, плей-офф, теракт, кран, сутка, ячейка, порция, дефицит, корректор, цунами, уик-енд, постамент, делегация, дезинформация, фонд, контингент, тенденция, инсайдер, узел (авто), лайнер, авиалайнер, круиз, досье, посилка, психологик, психика, самосвал, тротуар, грейдер, сплитер, пас, позиция, мини, бункер, кондиционер, вентилятор, архитектура, архитектор, аноним, пирожка, причал, паром, терминал, карьера, банкир, аналог, монолит, элита, бутик, азарт, сумма, печь, участка, масса, риск, сетка, гонорар, шасси, заправка, модификация, визуализация, рейс, минимал, потенциал, енот, эксперимент, графа, бутик, прогноз, велопатруль, сектор, суперкамбэк, интрига, марш, доклад, дебют, снайпер, санкция, жилет, рейтинг, инаугурация, эволюция, подъезд, анклав, мэрия, мэр, провинция, горелка, наркотрафик, наркотик, трансфер, посёлка, плитка, шайба, металлолом, макулатура, радикал, рейс, гегемон, крест, пуск, керамик, транспортировка, Рождество, альянс, коллектив, эпатаж, тип, офис, плюс, бум, борт, фюзелаж, шарклет, реабилитация, оборот, бутса, реакция, антик, зонд, парковка, иллюзия, арена, фуникулёр, лимит, маневр, винт, транзит, фара, медиатор, комплектация, сюрприз, коалиция, вотум, пульс, пульт, квота, респект, купе, фискал, хор, шок, мотив, тунель, тотал, резиденция, премиум-класс, старт, визит, футболка, кепка, атрибутика, эвакуация, агент (жосус), операцион, операция, петиция, монетизация, реализатор, реализация, камин, дуэль, модел, гастрономик, пролёт, гашиш, динамика, тонировка, клетчатка, провакация, контекст, тормоз, гедонизм, формализм, стажировка, кома, шоу рум, сервис, криминоген, изоляционизм, меркантализм, генерация, раунд, аукцион, регистрация, эксплуатация, парадокс, фильтр, унитаз, наклейка, базис, шорт-лист, шабаш, самосуд, яхта, идеал, монах, дизайн, трасса, курорт, веранда, балкон, терасса (тўғриси – терраса), персонал, авторизация, локал, эмпатия, манёвр, этика, эстетика, покер, структура, корт, схема, состав, позитив, стресс, секунд, фаворит, аудитория, ротация, факт, турнир, номинация, сертификат, айсберг, бак, форвард, турнир, массаж, шалтер, коллегия, эпизод, панорама, пассив, лексикон, котлован, аксессуар, парфюмерия, колонна (қатор, саф), абсурд, этап, индексация, стержен, стереотип, приют, ориентир, реставрация, анонс, котель (тўғриси – котёл), октагон, транзакция, кулачок, поршен, подшипник, плёнка, двигател, браслет, габарид (тўғриси – габарит), оператив, гид, нерв, ландшафт, шпал, вибрация, семестер, реванш, феномен, хит, шлягер, проём, шар, смена, колония, гараж, антиквариат, модельер, модел, фигурант, павильон, штаб-квартира, антициклон, сегмент, коридор, организм, эмоционал, блок, декоратив, хаос, концептуал, концепция, прайс-лист, рекорд, популяция, браконьер, сигнал, сигнализация, бонус, саботаж, куратор, снаряд, заряд, тренажёр, клапан, контур, дрифтинг, квартет, лидер, мэншн, ричаг, мачта, конструкция, ряска, кампус, компенсация, калибр, объектив, собор, пляж, аквамарин, акцент, аристократ, инструмент, гранд, информацион, сувенир, глушител, норматив, изоляция, консультант, менежер, пенсионерка, декорация, шаблон, гибрид, экономика, дриблёр, пост (интернет), ордер, апостиль, куртка, маньяк, индивидуал, рулетка, смог, колонка, лезвие, узурпатор, ракурс, протокол, негатив, компоновка, болбой, опция, картина, презентация, график, ролик, каркас, арсенал, экипаж, стакан, проезд, швартовка, ажиотаж, конвой, флагшток, революцион, километраж, фаза, профил, меню, оцинковка, титул, жунгли, пробел, методика, экипировка, ригел, навес, авария, тупик, мародёр, лава, эмиграция, талон, рационал, великан, санузел, ультиматум, юбилей, мастер...