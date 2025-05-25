import { $theme } from '@/src/application/theme'
import { StyleSheet } from 'react-native'

const outlinedStyles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: 'transparent',
    borderColor: $theme.getState().primary,
  },
  title: {
    color: $theme.getState().primary,
  },
})

const filledStyles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: $theme.getState().primary,
  },
  title: {
    color: $theme.getState().common.white,
  },
})

const disabledStyled = StyleSheet.create({
  buttonContainer: {
    backgroundColor: $theme.getState().common.neutral[20],
  },
  title: {
    color: $theme.getState().common.neutral[30],
  },
})

const textStyles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
  },
  title: {
    color: $theme.getState().primary,
  },
})

const smallSizeStyles = StyleSheet.create({
  buttonContainer: {
    height: 40,
  },
  title: {},
})

const mediumSizeStyles = StyleSheet.create({
  buttonContainer: {
    height: 56,
  },
  title: {},
})

const defaultStyles = StyleSheet.create({
  buttonContainer: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
    gap: 4,
  },
  title: {
    fontSize: 16,
  },
})

const fullWidthStyles = StyleSheet.create({
  buttonContainer: {
    width: '100%',
  },
  title: {},
})

export const getButtonStyles = (
  size: 'small' | 'medium',
  variant: 'outlined' | 'filled' | 'text',
  fullWidth?: boolean,
  disabled?: boolean,
) => {
  let containerStyles = defaultStyles.buttonContainer
  let titleStyles = defaultStyles.title

  switch (size) {
    case 'small':
      containerStyles = {
        ...containerStyles,
        ...smallSizeStyles.buttonContainer,
      }
      break
    case 'medium':
      containerStyles = {
        ...containerStyles,
        ...smallSizeStyles.buttonContainer,
      }
      break
  }

  switch (variant) {
    case 'filled':
      containerStyles = {
        ...containerStyles,
        ...filledStyles.buttonContainer,
      }
      titleStyles = {
        ...titleStyles,
        ...filledStyles.title,
      }
      break
    case 'outlined':
      containerStyles = {
        ...containerStyles,
        ...outlinedStyles.buttonContainer,
      }
      titleStyles = {
        ...titleStyles,
        ...outlinedStyles.title,
      }
      break
    case 'text':
      containerStyles = {
        ...containerStyles,
        ...textStyles.buttonContainer,
      }
      titleStyles = {
        ...titleStyles,
        ...textStyles.title,
      }
  }

  if (fullWidth) {
    containerStyles = {
      ...containerStyles,
      ...fullWidthStyles.buttonContainer,
    }
  }

  if (disabled) {
    containerStyles = {
      ...containerStyles,
      ...disabledStyled.buttonContainer,
    }
    titleStyles = {
      ...titleStyles,
      ...disabledStyled.title,
    }
  }

  return { containerStyles, titleStyles }
}
