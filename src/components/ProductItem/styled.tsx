import styled from 'styled-components/macro'

import { mainColors, boxShadows } from '../../ui-kit/sharedStyles'
import closeSvg from '../../assets/close.svg'

export const ProductItemContainer = styled.li`
  display: flex;
  flex-direction: column;
  padding: 4px;
  gap: 2px;
  border: 1px solid ${mainColors.primaryText};
  border-radius: 6px;
  width: 100%;
  color: ${mainColors.primaryText};
  box-shadow: ${boxShadows.main};
`

export const ProductTitle = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 5px;
`

export const ProductName = styled.div`
  padding-left: 2px;
  flex: 1;
  font-weight: 600;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const ProductTitleRightBlock = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 5px;
`

export const ProductEditBtn = styled.div`
  border-bottom: 1px solid ${mainColors.primaryText};
  cursor: pointer;
`

export const ProductDelete = styled.div`
  display: flex;
  width: 21px;
  height: 21px;
  justify-content: center;
  align-items: center;
  color: ${mainColors.red};
  /* border: 2px solid ${mainColors.red}; */
  /* border-radius: 50%; */
  /* box-shadow: ${boxShadows.main}; */
  background-image: url(${closeSvg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  cursor: pointer;
`

export const ProductValues = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`

export const InputLexica = styled.div`
  padding: 3px;
  flex: 50%;
  text-align: left;
  color: ${mainColors.primaryText};
  border-bottom: 1px solid ${mainColors.primaryText};
`
