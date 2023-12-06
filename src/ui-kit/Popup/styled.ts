import styled from 'styled-components/macro'

import { mobileBreakpoint } from '../sharedStyles'

export const PopupOverlay = styled.div`
  position: fixed;
  z-index: 10000;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);

  @media screen and (max-width: ${mobileBreakpoint}) {
    width: 100vw;
  }
`