import React, { Component } from 'react'
import { compose } from 'redux'
import PropTypes from 'prop-types'

import Typography from 'material-ui/Typography'
import { withStyles } from 'material-ui/styles'

import SignupForm from './forms/SignupForm'

const styles = theme => ({
  root: {
    color: theme.palette.text.primary
  }
})

class SignupPage extends Component {
  render() {
    const { classes } = this.props
    return (
      <div className="logincontainer absolute top right left bottom" >
        <div className="logincontent">
          <div>
            <Typography variant="display1" classes={{ root: classes.root }} >
            Create Account
            </Typography>
            <SignupForm />
          </div>
        </div>
      </div>
    )
  }
}

SignupPage.propTypes = {
  classes: PropTypes.object.isRequired
}

const enhance = compose(withStyles(styles))

export default enhance(SignupPage)
