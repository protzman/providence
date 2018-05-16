import React, { Component } from 'react'

import PropTypes from 'prop-types'
import ChevronIcon from '@material-ui/icons/ChevronRight'
import Typography from 'material-ui/Typography'
import IconButton from 'material-ui/IconButton'
import { withStyles } from 'material-ui/styles'


const styles = theme => ({
  root: {
    flexGrow: 1
  },
  body: {
    background: theme.palette.background.paper,
    color: theme.palette.text.primary
  },
  breadcrumb: {
    marginLeft: 20,
    marginRight: 20
  }
})


class Breadcrumb extends Component {
  render() {
    const { classes, route } = this.props
    return (
      <div className="breadcrumb">
        <IconButton
          color="inherit"
          aria-label="Menu"
          className={classes.breadcrumb}
        >
          <ChevronIcon />
        </IconButton>
        <Typography variant="title" >{route}</Typography>
      </div>
    )
  }
}

Breadcrumb.propTypes = {
  classes: PropTypes.object.isRequired,
  route: PropTypes.string.isRequired
}

export default withStyles(styles)(Breadcrumb)
