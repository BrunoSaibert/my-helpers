import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
  *{
    margin:0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${props => props.theme.colors.background};
    font-size: 14px;
    color: ${props => props.theme.colors.text};
    font-family: sans-serif;
    transition: all .3s;
  }

  p {
    font-size: ${props => props.theme.utils.fontSizes.sm};
    line-height: calc(${props => props.theme.utils.fontSizes.sm} + 5px);
    margin-bottom: 50px;
  }

  h1 {
    font-size: ${props => props.theme.utils.fontSizes.xl};
    line-height: calc(${props => props.theme.utils.fontSizes.xl} + 5px);
    margin-bottom: 15px;
  }

  a {
    text-decoration: none;
    transition: all 0.3s;
  }
`
