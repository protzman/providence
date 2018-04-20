import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Backdrop from 'material-ui/Modal/Backdrop'

import './App.css'
import { theme } from './mui_theme'
import NavigationBar from './components/NavigationBar'
import ActionsDrawer from './components/ActionsDrawer'
import Map from './components/Map'


class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      open: false
    }
  }

  toggleDrawer() {
    console.log('called')
    this.setState({ open: !this.state.open })
  }

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className="App">
          <NavigationBar
            title="Providence"
            toggleDrawer={() => this.toggleDrawer()}
          />
          <ActionsDrawer
            open={this.state.open}
            onRequestClose={boolean => this.setState({ open: boolean })}
          />
          <Map className="map" />
          <div />
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App
