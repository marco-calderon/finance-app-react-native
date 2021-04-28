import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

function AccountSvg(props: SvgProps) {
  return (
    <Svg
      width={88}
      height={88}
      viewBox="0 0 88 88"
      fill="none"
      {...props}
    >
      <Path d="M55 9.167H7.333v47.666H55V9.167z" fill="#B5C5C3" />
      <Path
        d="M38.042 78.833c0-11.77 9.551-21.321 21.321-21.321 11.77 0 21.304 9.551 21.304 21.321H38.042zM59.345 55.385a9.588 9.588 0 100-19.177 9.588 9.588 0 000 19.177zM35.255 44.843a9.588 9.588 0 009.588-9.588 9.588 9.588 0 00-9.588-9.588 9.588 9.588 0 00-9.588 9.588 9.588 9.588 0 009.588 9.588z"
        fill="#33404F"
      />
      <Path
        d="M53.515 56.65c-3.85-5.555-10.267-9.203-17.527-9.203-11.77-.019-21.321 9.533-21.321 21.303h23.118a24.532 24.532 0 0115.73-12.1z"
        fill="#33404F"
      />
    </Svg>
  )
}

export default AccountSvg
