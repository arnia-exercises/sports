import { createGlobalStyle, styled } from 'styled-components'

export default createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`

export const Container = styled.div`
  padding: 16px;
`
