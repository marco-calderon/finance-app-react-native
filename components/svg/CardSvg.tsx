import * as React from "react"
import Svg, { SvgProps, Path, Rect, Circle } from "react-native-svg"

function CardSvg(props: SvgProps) {
  return (
    <Svg
      width={210}
      height={132}
      viewBox="0 0 210 132"
      fill="none"
      {...props}
    >
      <Path
        d="M1 12C1 6.477 5.477 2 11 2h177c5.523 0 10 4.477 10 10v98c0 5.523-4.477 10-10 10H11c-5.523 0-10-4.477-10-10V12z"
        fill="#00DDA3"
      />
      <Path fill="#fff" d="M1 22h197v22H1z" />
      <Rect
        x={1.5}
        y={1.5}
        width={197}
        height={117}
        rx={8.5}
        stroke="#33404F"
        strokeWidth={3}
      />
      <Path
        d="M208 24v96c0 5.523-4.477 10-10 10H15M2 22h38M63 22h135"
        stroke="#33404F"
        strokeWidth={3}
        strokeLinecap="round"
      />
      <Path d="M1 44h199" stroke="#33404F" strokeWidth={3} />
      <Path fill="#fff" d="M13 88h50v8H13zM13 100h86v8H13z" />
      <Circle cx={176} cy={98} r={10} fill="#33404F" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M169.951 107.189A10.988 10.988 0 01165 98a10.99 10.99 0 014.951-9.19A9.968 9.968 0 00166 88c-5.523 0-10 4.477-10 10s4.477 10 10 10a9.965 9.965 0 003.951-.811z"
        fill="#33404F"
      />
    </Svg>
  )
}

export default CardSvg
