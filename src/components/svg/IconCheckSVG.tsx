import React from 'react'
interface IProps {
    title?: string,
    size?: number,
    color?: string
}
export default function IconCheckSVG({ title = "Tekshirish", size = 16, color = '#488740' }: IProps) {
    return (
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 32 32">
            <title>{title}</title>
            <path fill={color} d="M27 4l-15 15-7-7-5 5 12 12 20-20z"></path>
        </svg>
    )
}