import React from 'react'
interface IProps {
    title?: string,
    size?: number,
    color?: string
}
export default function IconSpellCheckSVG({ title = "Imlo App", size = 16, color = 'black' }: IProps) {
    return (
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 32 32">
            <title>{title}</title>
            <path fill={color} d="M4 8h4v6h2v-12c0-1.1-0.9-2-2-2h-4c-1.1 0-2 0.9-2 2v12h2v-6zM4 2h4v4h-4v-4zM30 2v-2h-6c-1.1 0-2 0.9-2 2v10c0 1.1 0.9 2 2 2h6v-2h-6v-10h6zM20 5v-3c0-1.1-0.9-2-2-2h-6v14h6c1.1 0 2-0.9 2-2v-3c0-1.1-0.275-2-1.375-2 1.1 0 1.375-0.9 1.375-2zM18 12h-4v-4h4v4zM18 6h-4v-4h4v4zM26 18l-13 14-7-9 2.563-2.188 4.438 4.625 11-9.438z"></path>
        </svg>
    )
}