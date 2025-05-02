import { ReactNode } from 'react'
import { Pressable, Text } from 'react-native'
import { getButtonStyles } from './Button.styles'
import { DefaultIconProps } from '@/src/shared/model'

export type ButtonProps = {
  title: string
  onClick: () => void
  variant?: 'outlined' | 'filled' | 'text'
  size?: 'small' | 'medium'
  disabled?: boolean
  icon?: (props: DefaultIconProps) => ReactNode
  fullWidth?: boolean
}

const Button = ({
  title,
  onClick,
  variant = 'filled',
  size = 'small',
  disabled = false,
  icon: Icon,
  fullWidth,
}: ButtonProps) => {
  const styles = getButtonStyles(size, variant, fullWidth)

  return (
    <Pressable
      style={styles.containerStyles}
      onPress={onClick}
    >
      {title && <Text style={styles.titleStyles}>{title}</Text>}
      {Icon && <Icon />}
    </Pressable>
  )
}

export default Button
