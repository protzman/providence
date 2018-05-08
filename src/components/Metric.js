import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Typography from 'material-ui/Typography'
import ClearIcon from '@material-ui/icons/Clear'
import IconButton from 'material-ui/IconButton'
import { Line } from 'react-chartjs-2'
import { withStyles } from 'material-ui/styles'

const styles = theme => ({
  root: {
    color: theme.palette.text.primary
  },
  clearIcon: {
    position: 'absolute',
    top: 0,
    right: 0,
    zIndex: 1300
  },
})
class Metric extends Component {
  render() {
    const { classes, data } = this.props
    return (
      <div>
        <Typography variant="headline" classes={{ root: classes.root }}>
        Firewall Breaches Over Time
          <IconButton className={classes.clearIcon} color="primary">
            <ClearIcon />
          </IconButton>
        </Typography>

        <Line data={this.props.data} options={{ maintainAspectRatio: false }} />
      </div>
    )
  }
}

Metric.propTypes = {
  classes: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired
}


export default withStyles(styles)(Metric)
