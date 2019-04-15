import React from 'react'
interface IProps {
    title?: string,
    size?: number,
    color?: string
}
export default function IconVerticalViewSVG({ title = "Vertikal Joylashuv", size = 16, color = 'black' }: IProps) {
    return (
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 32 32">
            <title>{title}</title>
            <path fill={color} d="M0 16h4v2h-4zM6 16h6v2h-6zM14 16h4v2h-4zM20 16h6v2h-6zM28 16h4v2h-4zM27.5 0l0.5 14h-24l0.5-14h1l0.5 12h20l0.5-12zM4.5 32l-0.5-12h24l-0.5 12h-1l-0.5-10h-20l-0.5 10z"></path>
        </svg>
    )
}