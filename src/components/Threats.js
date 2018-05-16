import React, { Component } from 'react'
import { withStyles } from 'material-ui/styles'
import EnhancedTable from './EnhancedTable'

const styles = theme => ({
  root: {
    color: theme.palette.text.primary
  }
})

class Threats extends Component {
  render() {
    return (
      <div className="content absolute top right left bottom" >
        <EnhancedTable />
      </div>
    )
  }
}


export default withStyles(styles)(Threats)
