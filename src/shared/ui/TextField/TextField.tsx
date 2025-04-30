import { $theme } from '@/src/theme'
import { StyleSheet, TextInput, TextInputBase } from 'react-native'
import { getTextFieldStyles } from './TextField.styles'

type TextFieldProps = {
  label: string
  value: string
  onChange: (value: string) => void
  type?: 'input' | 'search'
}

const TextField = ({
  label,
  value,
  onChange,
  type = 'input',
}: TextFieldProps) => {
  const styles = getTextFieldStyles(type)

  return (
    <TextInput
      placeholder={label}
      value={value}
      style={styles.input}
      onChangeText={(value) => onChange(value)}
    />
  )
}

export default TextField
