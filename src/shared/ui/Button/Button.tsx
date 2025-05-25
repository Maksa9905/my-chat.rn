import { ReactNode } from 'react'
import { ActivityIndicator, Pressable, Text } from 'react-native'
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
  loading?: boolean
}

const Button = ({
  title,
  onClick,
  variant = 'filled',
  size = 'small',
  disabled = false,
  icon: Icon,
  fullWidth,
  loading,
}: ButtonProps) => {
  const styles = getButtonStyles(size, variant, fullWidth, disabled || loading)

  return (
    <Pressable
      style={styles.containerStyles}
      onPress={onClick}
      disabled={disabled || loading}
    >
      {title && <Text style={styles.titleStyles}>{title}</Text>}
      {loading && <ActivityIndicator color="white" />}
      {Icon && <Icon />}
    </Pressable>
  )
}

export default Button
