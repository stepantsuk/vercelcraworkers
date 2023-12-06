import styled from 'styled-components/macro'

import { mainColors } from '../../ui-kit/sharedStyles'
import {
  ContentWrapper,
  Container,
} from '../App/styled'

export const EditContainer = styled(Container)``

export const EditProductContainer = styled(ContentWrapper)`
  padding: 5px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  min-height: auto;
  justify-content: center;
  background-color: ${mainColors.text};
  border-radius: 6px;
`

export const EditProductButtons = styled.div`
  width: 100%;
  padding: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  border: 1px solid ${mainColors.primaryText};
  border-radius: 6px;
`

export const ButtonsTitle = styled.div`
  text-align: center;
`

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 5px;
  width: 100%;
`