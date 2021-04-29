import React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

function HeaderSvg(props: SvgProps) {
  return (
    <Svg
      width={755}
      height={522}
      viewBox="0 0 755 522"
      fill="none"
      {...props}
    >
      <Path
        d="M0 0h755v414c0 59.647-48.353 108-108 108H108C48.353 522 0 473.647 0 414V0z"
        fill="#33404F"
      />
    </Svg>
  )
}

export default HeaderSvg
