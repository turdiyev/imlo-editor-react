import React from 'react'
interface IProps {
    title?: string,
    size?: number,
    color?: string
}
export default function IconItalicSVG({ title = "Qiyalashtirish", size = 16, color = 'black' }: IProps) {
    return (
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 32 32">
            <title>{title}</title>
            <path fill={color} d="M28 2v2h-4l-10 24h4v2h-14v-2h4l10-24h-4v-2z"></path>
        </svg >
    )
}