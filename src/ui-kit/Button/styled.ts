import styled, { css } from 'styled-components/macro'

import { BUTTON_TYPE } from '../../config'
import { mainColors, boxShadows } from '../../ui-kit/sharedStyles'

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  /* padding: 5px; */
  color: ${mainColors.gray};
`

type TButtonFrame = {
  disabled?: boolean,
  buttonType: string,
}

export const ButtonFrame = styled.button<TButtonFrame>`
  position: relative;
  padding: 2px;
  display: flex;
  justify-content: center;
  flex: 1;
  align-items: center;
  white-space: nowrap;
  font-weight: 600;
  cursor: pointer;
  border: 2px solid ${mainColors.gray};
  border-radius: 6px;
  box-shadow: ${boxShadows.main};

  ${({ buttonType, disabled }) => {
    switch (true) {
      case disabled:
        return css`
          {
            border-color: ${mainColors.gray};
            background-color: ${mainColors.text};
            color: ${mainColors.gray};
            cursor: auto;
          }
        `
      case [`${BUTTON_TYPE.addProduct}`, `${BUTTON_TYPE.yes}`].includes(buttonType):
        return css`
          {
            border-color: ${mainColors.green};
            background-color: ${mainColors.text};
            color: ${mainColors.green};
          }
        `
      case [`${BUTTON_TYPE.cleanCalc}`, `${BUTTON_TYPE.cleanList}`, `${BUTTON_TYPE.no}`].includes(buttonType):
        return css`
          {
            border-color: ${mainColors.red};
            background-color: ${mainColors.text};
            color: ${mainColors.red};
          }
        `
      default:
        return '';
    }
  }}
`