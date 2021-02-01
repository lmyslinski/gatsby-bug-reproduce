// mui-root-wrapper.js
import { createMuiTheme } from "@material-ui/core";
import React from 'react'
import { ThemeProvider } from '@material-ui/core/styles'

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#FFFFFF',
    },
    secondary: {
      main: '#fe8e5e',
    },
  }, typography: {
    fontFamily: [
      '"Lato"',
      'sanf-serif'
    ].join(','),
  },
});


export default ({ element }) => (
  <ThemeProvider theme={theme}>
    {element}
  </ThemeProvider>
)