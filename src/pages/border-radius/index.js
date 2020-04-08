import React, { useState, useEffect } from "react"
import copy from "copy-to-clipboard"

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism"

import Layout from "src/components/Layout"
import Input, { InputGroup } from "src/components/Input"
import Button, { ButtonGroup } from "src/components/Button"
import CardBorderRadius from "src/components/CardBorderRadius"
import SEO from "src/components/seo"

const BorderRadiusPage = () => {
  const [format, setFormat] = useState("square")
  const [type, setType] = useState("px")
  const [copied, setCopied] = useState(false)

  const [TopLeft, setTopLeft] = useState(50)
  const [TopRight, setTopRight] = useState(50)
  const [BottomLeft, setBottomLeft] = useState(50)
  const [BottomRight, setBottomRight] = useState(50)

  const randomNumber = (min = 0, max = format === "square" ? 200 : 300) => {
    return Math.floor(Math.random() * (max - min) + min)
  }

  const randomBorder = () => {
    setTopLeft(randomNumber())
    setTopRight(randomNumber())
    setBottomLeft(randomNumber())
    setBottomRight(randomNumber())
  }

  const resetBorder = (value = 0) => {
    setTopLeft(value)
    setTopRight(value)
    setBottomLeft(value)
    setBottomRight(value)
  }

  const codeString = `  #my-element { 
    border-radius: ${TopLeft}${type} ${TopRight}${type} ${BottomLeft}${type} ${BottomRight}${type};
    -moz-border-radius: ${TopLeft}${type} ${TopRight}${type} ${BottomLeft}${type} ${BottomRight}${type};
    -webkit-border-radius: ${TopLeft}${type} ${TopRight}${type} ${BottomLeft}${type} ${BottomRight}${type};
  }`

  const copyToClipBoard = () => {
    copy(codeString)
    setCopied(true)

    setTimeout(() => {
      setCopied(false)
    }, 1000)
  }

  return (
    <Layout className="internal-page">
      <SEO
        title="Border radius generator"
        description="The simplest visual generator for creating border-radius CSS3"
      />
      <div>
        <h1 style={{ marginBottom: "10px" }}>Border radius generator</h1>

        <ButtonGroup>
          <Button onClick={() => randomBorder()}>Random</Button>
          <Button onClick={() => resetBorder(50)}>Reset</Button>
          <Button onClick={() => resetBorder()}>No radius</Button>
        </ButtonGroup>

        <ButtonGroup>
          <Button
            onClick={() => setFormat("square")}
            className={format === "square" && "active"}
          >
            Square
          </Button>
          <Button
            onClick={() => setFormat("rectangle")}
            className={format === "rectangle" && "active"}
          >
            Rectangle
          </Button>
        </ButtonGroup>

        <ButtonGroup>
          <Button
            onClick={() => {
              setType("px")
            }}
            className={type === "px" && "active"}
          >
            px
          </Button>
          <Button
            onClick={() => {
              setType("%")
            }}
            className={type === "%" && "active"}
          >
            %
          </Button>
        </ButtonGroup>

        <InputGroup>
          <Input
            type="number"
            format={type}
            name="TopLeft"
            id="TopLeft"
            placeholder="TopLeft"
            value={TopLeft}
            onChange={e => setTopLeft(e.target.value)}
          />
          <Input
            type="number"
            format={type}
            name="TopRight"
            id="TopRight"
            placeholder="TopRight"
            value={TopRight}
            onChange={e => setTopRight(e.target.value)}
          />
        </InputGroup>

        <CardBorderRadius
          format={format}
          style={{
            borderTopLeftRadius: `${TopLeft}${type}`,
            borderTopRightRadius: `${TopRight}${type}`,
            borderBottomLeftRadius: `${BottomLeft}${type}`,
            borderBottomRightRadius: `${BottomRight}${type}`,
          }}
        ></CardBorderRadius>

        <InputGroup>
          <Input
            type="number"
            format={type}
            name="BottomLeft"
            id="BottomLeft"
            placeholder="BottomLeft"
            value={BottomLeft}
            onChange={e => setBottomLeft(e.target.value)}
          />
          <Input
            type="number"
            format={type}
            name="BottomRight"
            id="BottomRight"
            placeholder="BottomRight"
            value={BottomRight}
            onChange={e => setBottomRight(e.target.value)}
          />
        </InputGroup>
      </div>

      <div className="code">
        {!copied && <p>Click in CardBorderRadius to copy to clipboard! </p>}
        {copied && <p>Copied ✅</p>}

        <SyntaxHighlighter
          language="css"
          style={tomorrow}
          onClick={copyToClipBoard}
        >
          {codeString}
        </SyntaxHighlighter>
      </div>
    </Layout>
  )
}

export default BorderRadiusPage
