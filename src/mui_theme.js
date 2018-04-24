import { createMuiTheme } from 'material-ui/styles'
import grey from 'material-ui/colors/grey'

export const theme = createMuiTheme({
  palette: {
    action: {
      active: '#D8DEE9'
    },
    primary: grey,
    background: {
      paper: '#2E3440'
    },
    text: {
      primary: '#D8DEE9'
    }
  },
  typography: {
    fontFamily:
        'Raleway, sans-serif',
  },
})
