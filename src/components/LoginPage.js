import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Typography from 'material-ui/Typography'
import Input, { InputAdornment } from 'material-ui/Input'
import Button from 'material-ui/Button'

import PersonIcon from '@material-ui/icons/Accessibility'
import LockIcon from '@material-ui/icons/LockOutline'


const styles = theme => ({
  root: {
    color: theme.palette.text.primary
  }
})

class LoginPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userid: ''
    }
  }

  handleUseridChange(e) {
    console.log('userchange')
    this.setState({ userid: e.target.value })
  }

  render() {
    const { classes } = this.props
    return (
      <div className="logincontainer absolute top right left bottom" >
        <div className="logincontent">
          <div>
            <Typography variant="display1" classes={{ root: classes.root }} >
            Welcome to Providence
            </Typography>
          </div>
          <div className="loginitem">
            <Input
              fullWidth
              autoFocus
              placeholder="user id"
              value={this.state.userid}
              onChange={e => this.handleUseridChange(e)}
              startAdornment={
                <InputAdornment position="start">
                  <PersonIcon />
                </InputAdornment>}
              inputProps={{ 'aria-label': 'Description' }}
              classes={{ root: classes.root }}
            />
          </div>
          <div className="loginitem">
            <Input
              fullWidth
              placeholder="password"
              type="password"
              startAdornment={
                <InputAdornment position="start">
                  <LockIcon />
                </InputAdornment>}
              inputProps={{ 'aria-label': 'Description' }}
              classes={{ root: classes.root }}
            />
          </div>
          <div style={{ marginTop: '1.5em' }}>
            <Button
              fullWidth
              variant="flat"
              color="primary"
              className={classes.button}
              onClick={() => this.props.login(this.state.userid)}
            >
                login
            </Button>
          </div>
        </div>
      </div>
    )
  }
}

LoginPage.propTypes = {
  classes: PropTypes.object.isRequired,
  login: PropTypes.func.isRequired
}

export default withStyles(styles)(LoginPage)
