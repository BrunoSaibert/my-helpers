import React from "react"

import * as S from "./styles"

export const ButtonGroup = ({ children }) => {
  return <S.ButtonGroup>{children}</S.ButtonGroup>
}

const Button = ({ onClick, children, ...props }) => {
  return (
    <S.Button type="button" onClick={onClick} {...props}>
      {children}
    </S.Button>
  )
}

export default Button
