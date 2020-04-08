import React from "react"
import { Link } from "gatsby"

import * as S from "./styles"

export function CardList({ children, ...props }) {
  return <S.CardList {...props}>{children}</S.CardList>
}

const CardHome = ({ title, description, button: { to, text } }) => {
  return (
    <S.CardHome>
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
      <Link to={to}>
        <S.Button>
          {text} - {title}
        </S.Button>
      </Link>
    </S.CardHome>
  )
}

export default CardHome
