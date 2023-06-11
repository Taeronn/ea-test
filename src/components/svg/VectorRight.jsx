import * as React from "react"
const VectorRight = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={271}
        height={327}
        fill="none"
        {...props}
    >
        <path fill="none" d="M0 0h271v327H0z" />
        <g clipPath="url(#a)">
            <path fill="none" d="M-1649 0H271v950h-1920z" />
            <g filter="url(#b)">
                <path
                    fill="#162C4E"
                    fillRule="evenodd"
                    d="M692.596 68.335c38.467-101.258-74.539-78.526-91.501-136.394-20.605-70.294 127.907-394.107 36.728-433.398-164.414-36.671-212.3 184.058-287.755 192.474-73.15 8.159-193.398 28.436-256.193 66.832C33.77-205.398-49.09-92.689 39.78.389c68.334 68.007 112.911 47.05 133.61 100.952 21.918 57.075 25.563 123.957 71.896 163.847 50.213 43.229 120.45 71.581 185.192 57.488 63.014-13.717 92.421-83.083 138.703-127.992 43.313-42.027 110.611-67.372 123.416-126.35Z"
                    clipRule="evenodd"
                />
            </g>
        </g>
        <path stroke="#000" strokeWidth={5} d="M-1833.5-553.5h3662v3501h-3662z" />
        <defs>
            <clipPath id="a">
                <path fill="none" d="M-1649 0H271v950h-1920z" />
            </clipPath>
            <filter
                id="b"
                width={699.692}
                height={835.887}
                x={0.838}
                y={-505.564}
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
export default VectorRight
