import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { withStyles } from 'material-ui/styles'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'
import IconButton from 'material-ui/IconButton'
import MenuIcon from '@material-ui/icons/Menu'

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  body: {
    background: theme.palette.background.paper,
    color: theme.palette.text.primary
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
})

class NavigationBar extends Component {
  render() {
    const { classes, title } = this.props
    return (
      <div className={classes.root}>
        <AppBar position="static" className={classNames(classes.body)}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="Menu"
              className={classes.menuButton}
              onClick={() => this.props.toggleDrawer()}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="title" color="inherit" className={classes.flex}>
              {title}
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

NavigationBar.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  toggleDrawer: PropTypes.func.isRequired
}

export default withStyles(styles)(NavigationBar)
