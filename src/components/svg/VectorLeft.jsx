import * as React from "react"
const VectorLeft = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={470}
        height={419}
        fill="none"
        {...props}
    >
        <path fill="none" d="M0 0h470v419H0z" />
        <g clipPath="url(#a)">
            <path fill="none" d="M0 0h1920v950H0z"/>
            <g filter="url(#b)">
                <path
                    fill="#162C4E"
                    fillRule="evenodd"
                    d="M43.433 410.107c104.237-29.45 18.67-106.605 55.043-154.693C142.66 197 491.186 123.286 468.434 26.699 399.956-127.104 194.156-34.04 142.454-89.585 92.331-143.434 4.424-227.864-63.816-255.388c-65.32-26.345-205.195-25.701-227.017 101.074-13.917 95.359 29.466 118.65-1.496 167.375-32.785 51.592-84.33 94.363-88.77 155.313-4.811 66.054 14.254 139.315 64.134 182.881 48.549 42.402 121.776 24.68 185.411 35.071 59.552 9.725 119.993 48.639 174.987 23.781Z"
                    clipRule="evenodd"
                />
            </g>
        </g>
        <path stroke="#000" strokeWidth={5} d="M-184.5-553.5h3662v3501h-3662z" />
        <defs>
            <clipPath id="a">
                <path fill="none" d="M0 0h1920v950H0z" />
            </clipPath>
            <filter
                id="b"
                width={851.319}
                height={691.427}
                x={-381.819}
                y={-269.155}
                colorInterpolationFilters="sRGB"
                filterUnits="userSpaceOnUse"
            >
                <feFlood floodOpacity={0} result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feColorMatrix
                    in="SourceAlpha"
                    result="hardAlpha"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                />
                <feOffset dy={4} />
                <feGaussianBlur stdDeviation={15} />
                <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
                <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0" />
                <feBlend in2="shape" result="effect1_innerShadow_0_1" />
            </filter>
        </defs>
    </svg>
)
export default VectorLeft