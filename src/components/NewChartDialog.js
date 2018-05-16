import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { compose } from 'redux'
import { withStyles } from 'material-ui/styles'

import Button from 'material-ui/Button'
import Input from 'material-ui/Input'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'

import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormHelperText from '@material-ui/core/FormHelperText'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'

import Checkbox from '@material-ui/core/Checkbox'
import Donut from '@material-ui/icons/DonutLarge'
import Pie from '@material-ui/icons/PieChart'
import Line from '@material-ui/icons/Timeline'
import Bar from '@material-ui/icons/Equalizer'
import Circle from '@material-ui/icons/RadioButtonUnchecked'

const styles = theme => ({
  root: {
    color: theme.palette.text.primary
  },
  group: {
    margin: `${theme.spacing.unit}px 0`,
  },
  chartitem: {
    flex: 1, display: 'inline', marginLeft: '16px', textAlign: 'center'
  }
})

class NewChartDialog extends Component {
  constructor(props) {
    super(props)

    this.state = {
      value: null
    }
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value })
  }

  render() {
    const { classes } = this.props
    return (
      <div>
        <DialogTitle id="form-dialog-title">Configure New Metric</DialogTitle>
        <DialogContent>
          <DialogContentText classes={{ root: classes.root }}>
              Select from the options below to create a new metric that will be displayed on your dashboard
          </DialogContentText>
          <div className="loginitem">
            <Input
              autoFocus
              id="metric-name"
              placeholder="metric name"
              type="text"
              classes={{ root: classes.root }}
              fullWidth
            />
          </div>
          <div className="loginitem">
            <Input
              id="metric-description"
              placeholder="metric description"
              type="text"
              classes={{ root: classes.root }}
              fullWidth
            />
          </div>
          <div className="loginitem">
            <FormControl component="fieldset" fullWidth required className={classes.formControl}>
              <RadioGroup
                aria-label="gender"
                name="gender1"
                className={classes.group}
                value={this.state.value}
                onChange={this.handleChange}
                style={{ display: 'flex', flexDirection: 'row' }}
              >
                <FormControlLabel
                  value="donut"
                  className={classes.chartitem}
                  control={<Checkbox icon={<Donut />} checkedIcon={<Donut />} />}
                  label="Donut Chart"
                />
                <FormControlLabel
                  value="pie"
                  className={classes.chartitem}
                  control={<Checkbox icon={<Pie />} checkedIcon={<Pie />} />}
                  label="Pie Chart"
                />
                <FormControlLabel
                  value="bar"
                  className={classes.chartitem}
                  control={<Checkbox icon={<Bar />} checkedIcon={<Bar />} />}
                  label="Bar Chart"
                />
                <FormControlLabel
                  value="line"
                  className={classes.chartitem}
                  control={<Checkbox icon={<Line />} checkedIcon={<Line />} />}
                  label="Line Chart"
                />
              </RadioGroup>
            </FormControl>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleClose} color="primary">
              Cancel
          </Button>
          <Button onClick={this.handleClose} color="primary">
              Create
          </Button>
        </DialogActions>
      </div>
    )
  }
}

NewChartDialog.propTypes = {
  classes: PropTypes.object.isRequired
}

const enhance = compose(withStyles(styles))
export default enhance(NewChartDialog)
