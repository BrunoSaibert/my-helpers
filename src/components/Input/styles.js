import styled from "styled-components"

export const InputGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const Input = styled.input`
  border: 1px solid ${props => props.theme.colors.backgroud};
  font-size: ${props => props.theme.utils.fontSizes.sm};
  padding: 8px;
  margin: 15px 3px;
  width: 100px;
  border-radius: 2px;
`
