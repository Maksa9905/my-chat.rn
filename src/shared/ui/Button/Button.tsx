import { $theme } from '@/src/theme'
import { useMemo } from 'react'
import { Pressable, StyleSheet, Text } from 'react-native'
import { getButtonStyles } from './Button.styles'

export type ButtonProps = {
  title: string
  onClick: () => void
  variant?: 'outlined' | 'filled' | 'text'
  size?: 'small' | 'medium'
  disabled?: boolean
}

const Button = ({
  title,
  onClick,
  variant = 'filled',
  size = 'small',
  disabled = false,
}: ButtonProps) => {
  const styles = getButtonStyles(size, variant)

  return (
    <Pressable
      style={styles.containerStyles}
      onPress={onClick}
    >
      <Text style={styles.titleStyles}>{title}</Text>
    </Pressable>
  )
}

export default Button
