import React from 'react'
interface IProps {
    title?: string,
    size?: number,
    color?: string
}
export default function IconTabSVG({ title = "O'rnini almashtirish", size = 16, color = 'black' }: IProps) {
    return (
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 32 32">
            <title>{title}</title>
            <path fill={color} d="M30 0h2v16h-2v-16z"></path>
            <path fill={color} d="M0 16h2v16h-2v-16z"></path>
            <path fill={color} d="M10 22h22v4h-22v5l-7-7 7-7v5z"></path>
            <path fill={color} d="M22 10h-22v-4h22v-5l7 7-7 7z"></path>
        </svg>
    )
}