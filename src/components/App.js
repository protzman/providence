import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import PropTypes from 'prop-types'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import Button from 'material-ui/Button'
import Snackbar from 'material-ui/Snackbar'
import { withStyles } from 'material-ui/styles'
import { Switch, Route, withRouter } from 'react-router-dom'

import '../App.css'
import { theme } from '../mui_theme'
import NavigationBar from '../components/NavigationBar'
import ActionsDrawer from '../components/ActionsDrawer'
import Threats from '../components/Threats'

import Map from '../components/Map'
import Metrics from '../components/Metrics'
import LoginPage from '../components/LoginPage'
import SignupPage from '../components/SignupPage'

import { fetchUserRequest } from '../actions'


const styles = ({
  // theme already delcared in upper scope so just use styles
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 500,
    position: 'relative',
    minHeight: 200,
  },
  fab: {
    position: 'absolute',
    top: theme.spacing.unit * 6,
    right: theme.spacing.unit * 6,
    zIndex: 1300
  },
  snackbarDrawerClosed: {
    marginBottom: '-4px',
    marginLeft: '67px',
    position: 'absolute',
    zIndex: 1300
  },
  snackbarDrawerOpen: {
    marginBottom: '-4px',
    marginLeft: '235px',
    position: 'absolute',
    zIndex: 1300
  },
  snackbarContent: {
    width: 700,
    background: theme.palette.text.primary,
    color: theme.palette.background.paper,
    opacity: 0.5
  },
})

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      open: false,
      snack: false,
      loggedin: false
    }
  }

  handleClick = () => {
    console.log('snack time!')
    this.setState({ snack: true })
  }

  handleClose = () => {
    this.setState({ snack: false })
  }

  toggleDrawer() {
    console.log('called')
    this.setState({ open: !this.state.open })
  }

  loginRequest(e) {
    this.setState({ loggedin: true })
    console.log('making user request')
    this.props.fetchUserRequest(e)
    // this.props.history.push('/threats')
  }

  render() {
    const { classes } = this.props
    return (
      <MuiThemeProvider theme={theme}>

        <div className="App">

          <NavigationBar
            title="Providence"
            loggedin={this.state.loggedin}
            route={this.props.history.location.pathname}
            open={this.state.open}
            toggleDrawer={() => this.toggleDrawer()}
          />

          {this.state.loggedin ? <ActionsDrawer
            open={this.state.open}
            onRequestClose={boolean => this.setState({ open: boolean })}
          /> : ''}

          <Snackbar
            open={this.state.snack}
            autoHideDuration={6000}
            onClose={this.handleClose}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
            SnackbarContentProps={{
              'aria-describedby': 'snackbar-fab-message-id',
              className: classes.snackbarContent,
            }}
            message={
              <span><b>ALERT : </b>firewall breach at 213.433.23.54</span>
            }
            action={
              <Button color="inherit" size="small" onClick={this.handleClose}>
                Dismiss
              </Button>
            }
            className={this.state.open ? classes.snackbarDrawerOpen : classes.snackbarDrawerClosed}
          />

          <Switch>
            <Route exact path="/" render={() => <LoginPage login={e => this.loginRequest(e)} />} />
            <Route exact path="/signup" component={SignupPage} />
            <Route exact path="/metrics" component={Metrics} />
            <Route exact path="/map" component={Map} />
            <Route exact path="/threats" component={Threats} />
          </Switch>

        </div>
      </MuiThemeProvider>
    )
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  fetchUserRequest: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  const { login } = true
  // just bullshit
  return { login }
}

const mapDispatchToProps = dispatch => ({
  fetchUserRequest(login) {
    // dispatch the action FETCH_USER_REQUEST
    dispatch(fetchUserRequest(login))
  }
})


const enhance = compose(
  withRouter,
  withStyles(styles),
  connect(mapStateToProps, mapDispatchToProps)
)

export default enhance(App)
