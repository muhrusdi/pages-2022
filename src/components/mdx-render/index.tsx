import React from "react"
import { Link } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import CodeBlock from "../codeblock"

const MdxRender = ({ data }: { data: any }) => {
  const shortcodes = {
    Link,
    pre: CodeBlock,
  }

  return <MDXProvider components={shortcodes}>{data}</MDXProvider>
}

export default MdxRender
