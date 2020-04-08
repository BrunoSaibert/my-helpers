import React from "react"

import * as S from "./styles"

const CardBorderRadius = ({ children, ...props }) => {
  return <S.CardBorderRadius {...props}>{children}</S.CardBorderRadius>
}

export default CardBorderRadius
