export const searchBinary = (needle: string, haystack: string[], case_insensitive: boolean=true) => {
    if (needle == "") return [];
    const haystackLength = haystack.length;
    const letterNumber = needle.length;
    needle = (case_insensitive) ? needle.toLowerCase() : needle;

    /* start binary search, Get middle position */
    let getElementPosition = findElement()

    /* get interval and return result array */
    if (getElementPosition == -1) return [];
    return findRangeElement()

    function findElement() {
        if (typeof (haystack) === 'undefined' || !haystackLength) return -1;

        let high: number = haystack.length - 1;
        let low: number = 0;

        while (low <= high) {
            let mid: number = Math.trunc((low + high) / 2);
            let element = haystack[mid].substr(0, letterNumber);
            element = (case_insensitive) ? element.toLowerCase() : element;

            if (element > needle) {
                high = mid - 1;
            } else if (element < needle) {
                low = mid + 1;
            } else {

                return mid;
            }
        }
        return -1;
    }

    function findRangeElement() {
        let start = 0;
        let end = 1;
        for (let i = getElementPosition; i > 0; i--) {
            let element = (case_insensitive) ? haystack[i].substr(0, letterNumber).toLowerCase() : haystack[i].substr(0, letterNumber);
            if (element != needle) {
                start = i + 1;
                break;
            } else {
                start = 0;
            }
        }
        for (let i = getElementPosition; i < haystackLength; i++) {
            let element = (case_insensitive) ? haystack[i].substr(0, letterNumber).toLowerCase() : haystack[i].substr(0, letterNumber);
            if (element != needle) {
                end = i;
                break;
            } else {
                end = haystackLength - 1;
            }
        }
        let result = [];
        for (let i = start; i < end; i++) {
            result.push(haystack[i])
        }

        return result;
    }

};