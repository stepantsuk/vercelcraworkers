import { useButton } from './hooks'

import {
  ButtonContainer,
  ButtonFrame,
} from './styled'

type TButton = {
  buttonType: string,
  disabled?: boolean,
  onClick?: () => void,
}

export const Button = ({
  buttonType,
  disabled,
  onClick,
}: TButton) => {
  const { lexic } = useButton({ buttonType })

  return (
    <ButtonContainer>
      <ButtonFrame
        onClick={onClick}
        disabled={disabled}
        buttonType={buttonType}
      >
        {lexic}
      </ButtonFrame>
    </ButtonContainer>
  )
}