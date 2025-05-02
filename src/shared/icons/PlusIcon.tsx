import Svg, { Path } from 'react-native-svg'
import { DefaultIconProps } from '../model'

const PlusIcon = ({ color = '#939393', size = 18 }: DefaultIconProps) => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 18 18"
      fill="none"
    >
      <Path
        d="M8 1C8 0.447716 8.44772 0 9 0V0C9.55228 0 10 0.447715 10 1V17C10 17.5523 9.55228 18 9 18V18C8.44772 18 8 17.5523 8 17V1Z"
        fill={color}
      />
      <Path
        d="M17 8C17.5523 8 18 8.44772 18 9V9C18 9.55228 17.5523 10 17 10L1 10C0.447716 10 0 9.55228 0 9V9C0 8.44772 0.447715 8 1 8L17 8Z"
        fill={color}
      />
    </Svg>
  )
}

export default PlusIcon
