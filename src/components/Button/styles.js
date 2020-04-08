import styled from "styled-components"
import { shade } from "polished"

export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const Button = styled.button`
  cursor: pointer;
  color: ${props => props.theme.colors.text};
  background: ${props =>
    props.theme.title === "dark"
      ? props.theme.colors.secundary
      : props.theme.colors.primary};
  border: 1px solid ${props => props.theme.colors.background};
  font-size: ${props => props.theme.utils.fontSizes.sm};
  margin: 3px 0;
  padding: 8px 4px;

  &:first-child {
    border-radius: 6px 0 0 6px;
  }

  &:last-child {
    border-radius: 0 6px 6px 0;
  }

  outline: none;
  transition: all 0.3s;
  flex: 1;

  &:hover,
  &.active {
    background: ${props =>
      props.theme.title === "dark"
        ? shade(0.3, props.theme.colors.secundary)
        : shade(0.2, props.theme.colors.primary)};
  }
`
