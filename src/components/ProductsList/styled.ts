import styled from 'styled-components/macro'

import { mainColors } from '../../ui-kit/sharedStyles'

export const ProductsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100%;
  margin-top: 5px;
`

// export const DividerLine = styled.div`
//   height: 2px;
//   width: 100%;
//   background-color: ${mainColors.primaryText};
// `

export const ProductsListHeader = styled.div`
  display: flex;
  justify-content: space-between;
`

export const ProductsListTitle = styled.div`
  width: 100%;
  display: flex;
  justify-content: left;
  align-items: center;
  padding-left: 6px;
  color: ${mainColors.primaryText};
  font-weight: 600;
`

export const ProductsListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100%;
`