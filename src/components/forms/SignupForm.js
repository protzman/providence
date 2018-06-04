import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import PropTypes from 'prop-types'
import Input from 'material-ui/Input'
import { FormControl, FormHelperText } from 'material-ui/Form'
import Button from 'material-ui/Button'
import { withStyles } from 'material-ui/styles'

import { postUserRequest } from '../../actions'

const styles = theme => ({
  root: {
    color: theme.palette.text.primary
  }
})

class SignupForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userid: '',
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      passwordv: '',
      error: {
        userid: false,
        firstname: false,
        lastname: false,
        email: false,
        password: false,
        passwordv: false
      }
    }
  }

  handleUseridChange(e) {
    console.log('userchange')
    this.setState({ userid: e.target.value })
  }

  validate(e) {
    console.log('val')
    const { id, value } = e.target
    switch (id) {
      case 'userid':
        this.setState({ error: { ...this.state.error, userid: value.length < 6 } })
        break
      case 'firstname':
        this.setState({ error: { ...this.state.error, firstname: value.length < 6 } })
        break
      case 'lastname':
        this.setState({ error: { ...this.state.error, lastname: value.length < 6 } })
        break
      case 'email':
        this.setState({ error: { ...this.state.error, email: value.length < 6 } })
        break
      case 'password':
        this.setState({ error: { ...this.state.error, password: value.length < 6 } })
        break
      case 'passwordv':
        this.setState({ error: { ...this.state.error, passwordv: this.state.passwordv !== this.state.password } })
        break
      default:
    }
  }
  handleFormSubmit() {
    console.log('submitting account')
    this.props.postUserRequest(this.state)
  }


  render() {
    const { classes } = this.props
    return (
      <div>
        <div className="loginitem">
          <FormControl fullWidth error={this.state.error.userid}>
            <Input
              id="userid"
              fullWidth
              autoFocus
              placeholder="user id"
              onBlur={e => this.validate(e)}
              value={this.state.userid}
              onChange={e => this.setState({ userid: e.target.value })}
              inputProps={{ 'aria-label': 'Description' }}
              classes={{ root: classes.root }}
            />
            <FormHelperText>{this.state.error.userid ? `user id should be longer than 6 charachters` : ''}</FormHelperText>
          </FormControl>
        </div>
        <div className="loginitem">
          <FormControl fullWidth error={this.state.error.firstname}>
            <Input
              id="firstname"
              fullWidth
              placeholder="first name"
              onBlur={e => this.validate(e)}
              value={this.state.firstname}
              onChange={e => this.setState({ firstname: e.target.value })}
              inputProps={{ 'aria-label': 'Description' }}
              classes={{ root: classes.root }}
            />
            <FormHelperText>{this.state.error.firstname ? `names can only contain letters` : ''}</FormHelperText>
          </FormControl>
        </div>
        <div className="loginitem">
          <FormControl fullWidth error={this.state.error.lastname}>
            <Input
              id="lastname"
              fullWidth
              placeholder="last name"
              onBlur={e => this.validate(e)}
              value={this.state.lastname}
              onChange={e => this.setState({ lastname: e.target.value })}
              inputProps={{ 'aria-label': 'Description' }}
              classes={{ root: classes.root }}
            />
            <FormHelperText>{this.state.error.lastname ? `names can only contain letters` : ''}</FormHelperText>
          </FormControl>
        </div>
        <div className="loginitem">
          <FormControl fullWidth error={this.state.error.email}>
            <Input
              id="email"
              fullWidth
              placeholder="email"
              type="email"
              onBlur={e => this.validate(e)}
              value={this.state.email}
              onChange={e => this.setState({ email: e.target.value })}
              inputProps={{ 'aria-label': 'Description' }}
              classes={{ root: classes.root }}
            />
            <FormHelperText>{this.state.error.email ? `enter a properly formatted email address` : ''}</FormHelperText>
          </FormControl>
        </div>
        <div className="loginitem">
          <FormControl fullWidth error={this.state.error.password}>
            <Input
              id="password"
              fullWidth
              placeholder="password"
              type="password"
              onBlur={e => this.validate(e)}
              value={this.state.password}
              onChange={e => this.setState({ password: e.target.value })}
              inputProps={{ 'aria-label': 'Description' }}
              classes={{ root: classes.root }}
            />
            <FormHelperText>{this.state.error.password ? `password does not meet minimum requirements` : ''}</FormHelperText>
          </FormControl>
        </div>
        <div className="loginitem">
          <FormControl fullWidth error={this.state.error.passwordv}>
            <Input
              id="passwordv"
              fullWidth
              placeholder="verify password"
              type="password"
              onBlur={e => this.validate(e)}
              value={this.state.passwordv}
              onChange={e => this.setState({ passwordv: e.target.value })}
              inputProps={{ 'aria-label': 'Description' }}
              classes={{ root: classes.root }}
            />
            <FormHelperText>{this.state.error.passwordv ? `passwords do not match` : ''}</FormHelperText>
          </FormControl>
        </div>
        <div style={{ marginTop: '1.5em' }}>
          <Button
            fullWidth
            variant="flat"
            color="primary"
            className={classes.button}
            onClick={() => this.handleFormSubmit()}
          >
                submit
          </Button>
        </div>
      </div>
    )
  }
}

SignupForm.proptTypes = {
  classes: PropTypes.object.isRequired,
  postUserRequest: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  const { wow } = true
  // just bs
  return { wow }
}

const mapDispatchToProps = dispatch => ({
  postUserRequest(payload) {
    dispatch(postUserRequest(payload))
  }
})

const enhance = compose(
  withStyles(styles),
  connect(mapStateToProps, mapDispatchToProps)
)

export default enhance(SignupForm)
