import styled from "styled-components"

export const CardBorderRadius = styled.div`
  width: ${props => (props.format === "square" ? "150px" : "250px")};
  height: 150px;

  @media (${props => props.theme.utils.breakpoints.tablet_land}) {
    width: ${props => (props.format === "square" ? "200px" : "300px")};
    height: 200px;
  }

  margin: 0 auto;
  transition: all 0.5s;
  border-radius: 0;
  background: ${props => props.theme.colors.text};
`
