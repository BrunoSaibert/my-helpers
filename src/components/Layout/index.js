import React, { useState, useCallback, useEffect } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { ThemeProvider } from "styled-components"

import light from "src/styles/themes/light"
import dark from "src/styles/themes/dark"
import GlobalStyles from "src/styles/global"

import * as S from "./styles"

import Header from "src/components/Header"
import Footer from "src/components/Footer"

const Layout = ({ children, className }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const [theme, setTheme] = useState(light)

  const toggleTheme = useCallback(() => {
    setTheme(theme.title === "light" ? dark : light)
  })

  useEffect(() => {
    const storageTheme = localStorage.getItem("theme")

    if (storageTheme) {
      setTheme(JSON.parse(storageTheme))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme))
  }, [theme])

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />

      <Header
        siteTitle={data.site.siteMetadata.title}
        toggleTheme={toggleTheme}
      />

      <S.Main className={className}>{children}</S.Main>

      <Footer />
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}

export default Layout
