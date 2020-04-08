import React from "react"
// import { Link } from "gatsby"

import Layout from "src/components/Layout"
import CardHome, { CardList } from "src/components/CardHome"
import SEO from "src/components/seo"

const helpers = [
  {
    tag: ["CSS"],
    title: "Border radius generator",
    description:
      "The simplest visual generator for creating border-radius CSS3",
    button: {
      to: "/border-radius/",
      text: "Go to",
    },
  },
]

const IndexPage = () => (
  <Layout>
    <SEO
      title="The best tools for developers and designers"
      description="The best tools for developers and designers"
    />

    <h1>The best tools for developers and designers</h1>

    <CardList>
      {helpers.map(helper => (
        <CardHome {...helper} />
      ))}
    </CardList>
  </Layout>
)

export default IndexPage
