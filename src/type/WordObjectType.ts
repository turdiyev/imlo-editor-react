export interface WordObject {
    id?: number,
    name: string,
    info: string,
    slug?:string,
    word?:string,
    full_word?:string,
    variants?: string[]
}