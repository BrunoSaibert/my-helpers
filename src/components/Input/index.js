import React from "react"

import * as S from "./styles"

export const InputGroup = ({ children }) => {
  return <S.InputGroup>{children}</S.InputGroup>
}

const Input = ({
  id,
  name,
  placeholder,
  value,
  onChange,
  format,
  type = "number",
}) => {
  return (
    <S.Input
      type={type}
      min={0}
      // max={format === "%" ? 100 : 200}
      id={id}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  )
}

export default Input
