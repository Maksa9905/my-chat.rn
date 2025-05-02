import { ReactNode } from 'react'
import { DefaultIconProps } from '@/src/shared/model'
import Button from '../Button/Button'

type IconButtonProps = {
  onClick: () => void
  icon: (props: DefaultIconProps) => ReactNode
}

const IconButton = (props: IconButtonProps) => {
  return (
    <Button
      {...props}
      variant="text"
      title=""
    />
  )
}

export default IconButton
