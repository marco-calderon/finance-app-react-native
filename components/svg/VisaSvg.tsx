import React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

function VisaSvg(props: SvgProps) {
  return (
    <Svg
      width={100}
      height={32}
      viewBox="0 0 100 32"
      fill="none"
      {...props}
    >
      <Path
        d="M39.902.927l-5.065 29.721h8.1l5.07-29.72h-8.105zM28.046.96l-7.933 20.27-.846-3.061C17.702 14.48 13.26 9.185 8.046 5.848L15.3 30.633l8.571-.014L36.627.954 28.046.96z"
        fill="#fff"
      />
      <Path
        d="M16.192 3.087c-.471-1.81-1.836-2.35-3.53-2.414H.104L0 1.265c9.773 2.37 16.24 8.083 18.923 14.952l-2.731-13.13zM64.423 6.625c2.65-.042 4.57.538 6.062 1.138l.732.343 1.096-6.441c-1.605-.602-4.12-1.248-7.257-1.248-8.004 0-13.646 4.03-13.69 9.808-.051 4.269 4.02 6.652 7.094 8.075 3.157 1.458 4.215 2.385 4.2 3.688-.025 1.99-2.516 2.902-4.843 2.902-3.244 0-4.967-.448-7.627-1.557l-1.044-.475-1.14 6.652c1.896.832 5.394 1.546 9.025 1.584 8.515 0 14.048-3.984 14.107-10.157.035-3.377-2.126-5.954-6.807-8.068-2.833-1.38-4.566-2.296-4.55-3.688 0-1.235 1.471-2.556 4.642-2.556zM93.1.96h-6.258c-1.944 0-3.39.53-4.244 2.467L70.571 30.665h8.506s1.388-3.663 1.702-4.465c.931 0 9.196.012 10.373.012.242 1.038.988 4.453.988 4.453h7.514L93.1.96zm-9.99 19.157c.667-1.707 3.228-8.307 3.228-8.307-.044.082.66-1.718 1.079-2.837l.546 2.563 1.877 8.58h-6.73z"
        fill="#fff"
      />
    </Svg>
  )
}

export default VisaSvg