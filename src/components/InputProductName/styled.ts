import styled from 'styled-components/macro'
import { mainColors, boxShadows } from '../../ui-kit/sharedStyles'

export const ProductNameWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 5px;
  width: 100%;
`

export const ProductNameLexica = styled.div`
  padding: 3px;
  flex: 30%;
  text-align: left;
  color: ${mainColors.primaryText};
  border-bottom: 1px solid ${mainColors.primaryText};
`

export const ProductNameValue = styled.div`
  flex: 70%;
  padding: 3px;
  font-weight: 400;
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

export const ProductNameInput = styled.input`
  min-width: 0;
  flex: 70%;
  padding: 2px;
  text-align: center;
  color: ${mainColors.primaryText};
  border: 1px solid ${mainColors.primaryText};
  border-radius: 6px;
  box-shadow: ${boxShadows.main};
`

