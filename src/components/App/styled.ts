import styled from 'styled-components/macro'

import {
  mobileBreakpoint,
  mainColors,
} from '../../ui-kit/sharedStyles'


export const AppWrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  min-height: 100vh;
`

export const Container = styled.div`
  width: 769px;
  margin: 0 auto;
  
  @media screen and (max-width: ${mobileBreakpoint}) {
    width: 90%;
  }
`

export const ContentWrapper = styled.div`
  /* padding-top: 10px; */
  /* display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  gap: 5px; */
`

export const AppHeaderFrame = styled.div`
  background-color: ${mainColors.lightPrimary};
`

export const AppHeader = styled.div`
  padding: 10px 0;
  background-color: ${mainColors.primary};
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`

export const AppTitle = styled.h1`
  font-size: 20px;
  text-align: center;
  color: ${mainColors.text};
`

export const CalculatorFrame = styled.div`
  background-color: ${mainColors.lightPrimary};
  width: 100%;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`

export const CalculatorColumn = styled.div`
  padding: 5px 0 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  gap: 5px;
`