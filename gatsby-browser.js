import React from "react"
// import { MDXProvider } from "@mdx-js/react"
// import Highlight, { defaultProps } from "prism-react-renderer"
import { ThemeProvider } from "styled-components"
import { globalTheme } from "./src/themes/theme"
import "katex/dist/katex.min.css"
import "./src/styles/prism-theme.scss"

export const wrapRootElement = ({ element }) => {
  return <ThemeProvider theme={globalTheme}>{element}</ThemeProvider>
}
