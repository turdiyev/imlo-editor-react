export const sort = (array: number[]): number[] => {
    const len = array.length;
    if (len <= 1) return array;

    const lastIndex: number = len - 1;
    const pivot: number = array[lastIndex]
    const left: number[] = []
    const right: number[] = []

    for (let i: number = 0; i < lastIndex; i++) {
        if (pivot > array[i]) {
            left.push(array[i])
        } else {
            right.push(array[i])
        }
    }

    return [...sort(left), pivot, ...sort(right)]
}