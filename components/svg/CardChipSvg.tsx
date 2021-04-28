import React from "react";
import Svg, { SvgProps, Path } from "react-native-svg"

function CardChipSvg(props: SvgProps) {
  return (
    <Svg
      width={44}
      height={60}
      viewBox="0 0 44 60"
      fill="none"
      {...props}
    >
      <Path
        d="M30.811 30.84H22.55v11.425h8.261V30.84zM30.811 17.735H22.55V29.84h8.261V17.735zM12.842 16.735h8.608V0H5.5C2.464 0 0 2.24 0 5v1.81l12.842 9.925zM31.91 17.465V29.84H44V8.125l-12.09 9.34zM31.91 42.535L44 51.875V30.84H31.91v11.695zM22.55 16.735h8.608L44 6.81V5c0-2.76-2.464-5-5.5-5H22.55v16.735zM21.45 43.265h-8.607L0 53.19V55c0 2.76 2.464 5 5.5 5h15.95V43.265zM31.157 43.265H22.55V60H38.5c3.036 0 5.5-2.24 5.5-5v-1.81l-12.843-9.925zM12.089 42.535V30.84H0v21.035l12.089-9.34zM21.45 17.735h-8.261V29.84h8.26V17.735zM21.45 30.84h-8.261v11.425h8.26V30.84zM12.089 17.465L0 8.125V29.84h12.089V17.465z"
        fill="#fff"
      />
    </Svg>
  )
}

export default CardChipSvg;