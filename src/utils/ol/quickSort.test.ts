import * as quickSort from "../quickSort"

// it("quickSort", () => {

    test("[1,3,4]", () => {
        expect(quickSort.sort([1, 3, 4])).toEqual([1, 3, 4])
    })

    test("[1,4,3]", () => {
        expect(quickSort.sort([1, 4, 3])).toEqual([1, 3, 4])
    })

    test("[1,4,1]", () => {
        expect(quickSort.sort([1, 4, 1])).toEqual([1, 1, 4])
    })

    test("[1,2,1]", () => {
        expect(quickSort.sort([1, 2, 1])).not.toEqual([1, 2, 1])
    })
// })