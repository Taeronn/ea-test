import * as React from "react"
const ArrowRight = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={20}
        height={20}
        fill="none"
        {...props}
    >
        <path
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4.167 10h11.666M10 4.167 15.833 10 10 15.833"
        />
    </svg>
)
export default ArrowRight
