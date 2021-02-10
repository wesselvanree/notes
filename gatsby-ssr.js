import React from "react"
import { ThemeProvider } from "styled-components"
import { globalTheme } from "./src/themes/theme"

export const wrapRootElement = ({ element }) => {
  return <ThemeProvider theme={globalTheme}>{element}</ThemeProvider>
}
