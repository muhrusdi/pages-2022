import React from "react"
import { Link } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { compileMDX } from "gatsby-plugin-mdx"
import CodeBlock from "../codeblock"

const MdxRender = ({ data, children }: { data?: any; children: any }) => {
  const shortcodes = {
    Link,
    pre: CodeBlock,
  }

  return <MDXProvider components={shortcodes}>{children}</MDXProvider>
}

export default MdxRender
