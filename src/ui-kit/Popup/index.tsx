import { ReactNode } from 'react'

import { PopupOverlay } from './styled'

type TPopup = {
  children: ReactNode,
}

export const Popup = ({
  children,
}: TPopup) => {
  return (
    <PopupOverlay>
      {children}
    </PopupOverlay>
  )
}