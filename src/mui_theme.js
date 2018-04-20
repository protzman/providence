import { createMuiTheme } from 'material-ui/styles'
import red from 'material-ui/colors/red'

export const theme = createMuiTheme({
  palette: {
    action: {
      active: '#D8DEE9'
    },
    primary: red,
    background: {
      paper: '#2E3440'
    },
    text: {
      primary: '#D8DEE9'
    }
  },
  typography: {
    // Use the system font over Roboto.
    fontFamily:
        'Raleway, sans-serif',
  },
})
