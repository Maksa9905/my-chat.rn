import { $theme } from '@/src/theme'
import { StyleSheet, TextInput, TextInputBase, View } from 'react-native'
import { getTextFieldStyles } from './TextField.styles'
import IconButton from '../IconButton/IconButton'
import { ReactNode } from 'react'

type TextFieldProps = {
  label: string
  value: string
  onChange: (value: string) => void
  type?: 'outlined' | 'filled'
  icon?: () => ReactNode
  onClickIcon?: () => void
}

const TextField = ({
  label,
  value,
  onChange,
  type = 'outlined',
  icon: Icon,
  onClickIcon,
}: TextFieldProps) => {
  const styles = getTextFieldStyles(type)

  return (
    <View>
      <TextInput
        placeholder={label}
        value={value}
        style={styles.input}
        onChangeText={(value) => onChange(value)}
      />
      {Icon && onClickIcon && (
        <View style={styles.iconContainer}>
          <IconButton
            icon={Icon}
            onClick={onClickIcon}
          />
        </View>
      )}
    </View>
  )
}

export default TextField
