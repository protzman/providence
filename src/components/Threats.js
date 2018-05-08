import React, { Component } from 'react'
import { withStyles } from 'material-ui/styles'
import Button from 'material-ui/Button'
import Typography from 'material-ui/Typography'
import EnhancedTable from './EnhancedTable'

const styles = theme => ({
  root: {
    color: theme.palette.text.primary
  }
})

class Threats extends Component {
  render() {
    const { classes } = this.props
    return (
      <div className="content absolute top right left bottom" >
        <Typography className="contentheader" classes={{ root: classes.root }} variant="display3" gutterBottom>
        Recent Threats
        </Typography>
        <EnhancedTable />
      </div>
    )
  }
}

export default withStyles(styles)(Threats)
