import styled from "styled-components"
import { shade, darken, lighten } from "polished"

const gup = 10
const cols = 3

export const CardList = styled.ul`
  list-style: none;
  width: 100%;
  margin: 0 auto;

  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: nowrap;
  flex-direction: column;

  @media (${props => props.theme.utils.breakpoints.tablet_port}) {
    flex-wrap: wrap;
    flex-direction: row;
  }
`

export const CardHome = styled.li`
  flex: 1;
  width: 100%;
  /* height: 150px; */

  @media (${props => props.theme.utils.breakpoints.tablet_port}) {
    flex: 0 0 calc((100% - ${gup * (cols - 1) * 2}px) / ${cols - 1});
  }

  @media (${props => props.theme.utils.breakpoints.tablet_land}) {
    flex: 0 0 calc((100% - ${gup * cols * 2}px) / ${cols});
  }

  border-radius: 10px;
  margin: ${gup}px;
  overflow: hidden;
  padding: 20px 0 0;
  transition: all 0.5s;
  background: ${props =>
    props.theme.title === "dark"
      ? lighten(0.1, props.theme.colors.background)
      : darken(0.05, props.theme.colors.background)};
  color: ${props => props.theme.colors.text};
  border: 1px solid ${props => props.theme.colors.background};
`

export const Title = styled.h2`
  padding: 0 20px;
  font-size: ${props => props.theme.utils.fontSizes.lg};
  line-height: calc(${props => props.theme.utils.fontSizes.lg} + 5px);
  margin-bottom: 15px;
`

export const Description = styled.p`
  padding: 0 20px;
  font-size: ${props => props.theme.utils.fontSizes.xs};
  line-height: calc(${props => props.theme.utils.fontSizes.xs} + 5px);
`

export const Button = styled.span`
  background: ${props =>
    props.theme.title === "dark"
      ? props.theme.colors.secundary
      : props.theme.colors.primary};
  color: ${props => props.theme.colors.text};
  height: 50px;
  margin-top: 20px;
  font-weight: bold;
  transition: all 0.3s;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover,
  &.active {
    background: ${props =>
      props.theme.title === "dark"
        ? shade(0.3, props.theme.colors.secundary)
        : shade(0.2, props.theme.colors.primary)};
  }
`
