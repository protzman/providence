import React, { Component } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { withStyles } from 'material-ui/styles'
import { withRouter } from 'react-router-dom'
import AppBar from 'material-ui/AppBar'
import _ from 'lodash'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'
import IconButton from 'material-ui/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import PersonIcon from '@material-ui/icons/Person'
import Avatar from '@material-ui/core/Avatar'

import { userSelector } from '../selectors'

import Breadcrumb from './Breadcrumb'

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  body: {
    background: theme.palette.background.paper,
    color: theme.palette.text.primary
  },
  spacer: {
    flex: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  breadcrumb: {
    marginLeft: 20,
    marginRight: 20
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
})

class NavigationBar extends Component {
  render() {
    const {
      classes, title, route, loggedin
    } = this.props
    return (
      <div className={classes.root}>
        <AppBar position="static" className={classNames(classes.body)}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="Menu"
              disabled={route === '/'}
              className={classes.menuButton}
              onClick={() => this.props.toggleDrawer()}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="title"
              color="inherit"
            >
              {title}
            </Typography>
            {route && route !== '/' ? <Breadcrumb route={_.capitalize(_.trim(route, '/'))} /> : ''}
            <div className={classes.spacer} />
            <Button color="inherit" className={classes.navButton}>Other Button</Button>
            {
              loggedin ?
                <Button color="inherit" className={classes.navButton}>
                  <Avatar alt="user" src={this.props.user.avatar_url} className={classes.leftIcon} />
                  {this.props.user.name}
                </Button>
            :
                <Button color="inherit" className={classes.navButton}>Login</Button>
            }
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

NavigationBar.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  toggleDrawer: PropTypes.func.isRequired,
  route: PropTypes.string.isRequired,
  loggedin: PropTypes.bool.isRequired,
  user: PropTypes.object.isRequired
}

function mapStateToProps(state) {
  return {
    user: userSelector(state)
  }
}

const enhance = compose(
  withRouter,
  connect(mapStateToProps),
  withStyles(styles)
)

export default enhance(NavigationBar)
