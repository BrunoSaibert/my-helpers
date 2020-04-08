import styled, { keyframes } from "styled-components"
import { shade } from "polished"

export const Container = styled.footer`
  height: 100px;
  background: ${props => props.theme.colors.primary};
  color: #fff;
  font-size: ${props => props.theme.utils.fontSizes.sm};
  margin-top: auto;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media (${props => props.theme.utils.breakpoints.tablet_land}) {
    flex-direction: row;
  }

  a {
    color: #fff;
    font-weight: bold;
    padding: 6px;

    &:hover {
      color: ${props => shade(0.2, "#fff")};
    }
  }
`

export const PulseAnimation = keyframes`
  0% { 
    transform: scale(1.5); }
  20% { 
    transform: scale(1.8); }
  100% { 
    transform: scale(1.5); }
`

export const Pulse = styled.span`
  color: #f00;
  padding: 6px;
  font-weight: bold;
  animation: ${PulseAnimation} 1s infinite;
`
