import styled from 'styled-components/macro'

import { mainColors, boxShadows } from '../../ui-kit/sharedStyles'

export const InputPriceAmount = styled.div`
  flex: 40%;
  padding: 2px;
  font-weight: 600;
  color: ${mainColors.primaryText};
  border: 1px solid ${mainColors.primaryText};
  text-align: center;
  border-radius: 6px;
  box-shadow: ${boxShadows.main};
`