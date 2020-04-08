import React, { useContext } from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

import Switch from "react-switch"
import { ThemeContext } from "styled-components"
import { shade } from "polished"

import * as S from "./styles"

const Header = ({ siteTitle, toggleTheme }) => {
  const { colors, title } = useContext(ThemeContext)

  return (
    <S.Container>
      <S.Brand>
        <Link to="/" className="brand">
          {siteTitle}
        </Link>
      </S.Brand>

      <Switch
        onChange={toggleTheme}
        checked={title === "dark" ? true : false}
        checkedIcon={false}
        uncheckedIcon={false}
        height={10}
        width={40}
        handleDiameter={20}
        offColor={shade(0.1, colors.primary)}
        onColor={colors.secundary}
      />
    </S.Container>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
