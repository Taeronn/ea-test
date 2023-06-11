import * as React from "react"
const Cross = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={25}
        height={25}
        fill="none"
        {...props}
    >
        <path
            fill="#135978"
            fillOpacity={0.5}
            d="m13.671 12.807 10.4-10.4a.938.938 0 0 0-1.326-1.325l-10.4 10.4-10.4-10.4A.938.938 0 1 0 .62 2.408l10.4 10.4L.62 23.206a.937.937 0 1 0 1.326 1.326l10.4-10.4 10.399 10.4a.934.934 0 0 0 1.326 0 .937.937 0 0 0 0-1.326l-10.4-10.4Z"
        />
    </svg>
)
export default Cross
