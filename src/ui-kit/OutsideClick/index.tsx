import { ReactNode, RefObject } from 'react'

import styled from 'styled-components/macro'

import { useOutsideClick } from '../../hooks/useOutSideClick'

type TOutsideClick = {
  children: ReactNode,
  className?: string,
  onClick: (event: MouseEvent) => void,
  outerRef?: RefObject<HTMLDivElement>,
}

export const OutsideClickWrapper = styled.div``

export const OutsideClick = ({
  children,
  className,
  onClick,
  outerRef,
}: TOutsideClick) => {
  const ref = useOutsideClick<HTMLDivElement>({ onClick, outerRef })

  return (
    <OutsideClickWrapper className={className} ref={ref}>
      {children}
    </OutsideClickWrapper>
  )
}
