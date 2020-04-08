import styled from "styled-components"

export const Container = styled.header`
  height: 60px;
  background: ${props => props.theme.colors.primary};
  color: #fff;
  padding: 0 20px;

  @media (${props => props.theme.utils.breakpoints.tablet_land}) {
    padding: 0 30px;
  }

  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Brand = styled.span`
  a {
    color: ${props => props.theme.colors.text};
    text-decoration: none;
    font-size: ${props => props.theme.utils.fontSizes.lg};
    font-weight: bold;
  }
`
