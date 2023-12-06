import styled from 'styled-components/macro'

import { boxShadows, mainColors } from '../../ui-kit/sharedStyles'

export const InputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 5px;
  width: 100%;
  /* padding: 5px; */
`

export const InputLexica = styled.div`
  padding: 3px;
  flex: 60%;
  text-align: left;
  color: ${mainColors.primaryText};
  border-bottom: 1px solid ${mainColors.primaryText};
`

export const InputPriceAmount = styled.div`
  flex: 40%;
  padding: 3px;
  font-weight: 600;
  color: ${mainColors.primaryText};
  background-color: ${mainColors.primary};
  text-align: center;
  cursor: pointer;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  border-radius: 6px;
  box-shadow: ${boxShadows.main};
`

export const Input = styled.input`
  min-width: 0;
  flex: 40%;
  padding: 2px;
  text-align: center;
  color: ${mainColors.primaryText};
  border: 1px solid ${mainColors.primaryText};
  border-radius: 6px;
  box-shadow: ${boxShadows.main};
`