import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import { ListItem, ListItemText } from 'material-ui/List'
import Typography from 'material-ui/Typography'
import ClearIcon from '@material-ui/icons/Clear'
import TimelineIcon from '@material-ui/icons/Timeline'
import IconButton from 'material-ui/IconButton'
import Button from 'material-ui/Button'

import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import Slide from '@material-ui/core/Slide'

import { Doughnut, Bar, Line, HorizontalBar } from 'react-chartjs-2'
import { Responsive, WidthProvider } from 'react-grid-layout'

import ReactTooltip from 'react-tooltip'

import NewChartDialog from './NewChartDialog'

const ResponsiveGridLayout = WidthProvider(Responsive)

const data = {
  key: 'a',
  title: 'Intrusions Per Network',
  type: 'Doughnut',
  data: {
    labels: [
      'Plutonium',
      'Titanium',
      'Uranium'
    ],
    datasets: [{
      data: [300, 150, 100],
      backgroundColor: [
        'rgba(143,188,187,0.2)',
        'rgba(136,192,208,0.2)',
        'rgba(129,161,193,0.2)'
      ],
      hoverBackgroundColor: [
        'rgba(143,188,187,0.4)',
        'rgba(136,192,208,0.4)',
        'rgba(129,161,193,0.4)'
      ],
      borderColor: ['#2f3540', '#2f3540', '#2f3540'],
      hoverBorderColor: ['#2f3540', '#2f3540', '#2f3540']
    }]
  }
}
const data2 = {
  key: 'd',
  title: 'Weekly IP Traffic',
  type: 'Bar',
  data: {
    labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    datasets: [
      {
        label: 'Plutonium Network',
        backgroundColor: 'rgba(143,188,187,0.2)',
        borderColor: 'rgba(143,188,187,1)',
        borderWidth: 2,
        hoverBackgroundColor: 'rgba(143,188,187,0.4)',
        hoverBorderColor: 'rgba(216,222,233,1)',
        data: [65, 59, 80, 81, 56, 55, 40]
      },
      {
        label: 'Titanium Network',
        backgroundColor: 'rgba(136,192,208,0.2)',
        borderColor: 'rgba(136,192,208,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(136,192,208,0.4)',
        hoverBorderColor: 'rgba(136,192,208,1)',
        data: [12, 13, 20, 23, 18, 26, 60]
      },
      {
        label: 'Uranium Network',
        backgroundColor: 'rgba(129,161,193,0.2)',
        borderColor: 'rgba(129,161,193,1)',
        borderWidth: 2,
        hoverBackgroundColor: 'rgba(129,161,193,0.4)',
        hoverBorderColor: 'rgba(129,161,193,1)',
        data: [165, 109, 115, 98, 56, 155, 140]
      }
    ]
  }
}
const data3 = {
  key: 'c',
  title: 'Firewall Breaches Over Time',
  type: 'Line',
  layout: {
    i: 'c', x: 0, y: 4, w: 6, h: 4, isResizeable: true
  },
  data: {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'Augest', 'September', 'October', 'November', 'December'],
    datasets: [
      {
        label: 'Plutonium Network',
        fill: true,
        lineTension: 0.5,
        backgroundColor: 'rgba(143,188,187,0.1)',
        borderColor: 'rgba(143,188,187,1)',
        borderWidth: 2,
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(143,188,187,0.1)',
        pointBackgroundColor: 'rgba(143,188,187,1)',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(143,188,187,1)',
        pointHoverBorderColor: 'rgba(143,188,187,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 2,
        pointHitRadius: 10,
        data: [65, 59, 80, 81, 56, 55, 40, 69, 69, 21, 34, 31]
      },
      {
        label: 'Titanium Network',
        fill: true,
        lineTension: 0.5,
        backgroundColor: 'rgba(136,192,208,0.1)',
        borderColor: 'rgba(136,192,208,1)',
        borderWidth: 2,
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(136,192,208,0.1)',
        pointBackgroundColor: 'rgba(136,192,208,1)',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(136,192,208,1)',
        pointHoverBorderColor: 'rgba(136,192,208,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 2,
        pointHitRadius: 10,
        data: [23, 29, 26, 100, 60, 58, 60, 97, 82, 75, 45, 56]
      },
      {
        label: 'Uranium Network',
        fill: true,
        lineTension: 0.5,
        backgroundColor: 'rgba(129,161,193,0.1)',
        borderColor: 'rgba(129,161,193,1)',
        borderWidth: 2,
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(129,161,193,0.1)',
        pointBackgroundColor: 'rgba(129,161,193,1)',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(129,161,193,1)',
        pointHoverBorderColor: 'rgba(129,161,193,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 2,
        pointHitRadius: 10,
        data: [44, 123, 322, 256, 222, 180, 145, 82, 115, 115, 150, 155]
      },
    ]
  }
}

const styles = theme => ({
  root: {
    color: theme.palette.text.primary
  },
  clearIcon: {
    position: 'absolute',
    top: 0,
    right: 0,
  },
  fab: {
    position: 'absolute',
    bottom: theme.spacing.unit * 6,
    right: theme.spacing.unit * 6,
    zIndex: 1300
  },
  listItemTooltip: {
    color: '#2E3440'
  }
})

class Metrics extends Component {
  constructor(props) {
    super(props)

    this.state = {
      layout: {
        lg: [{
          i: 'a', x: 0, y: 0, w: 4, h: 4, isResizeable: true
        },
        {
          i: 'd', x: 6, y: 0, w: 8, h: 4, isResizeable: true
        },
        {
          i: 'c', x: 0, y: 4, w: 12, h: 3, isResizeable: true
        }]
      },
      modal: false,
      closeDialog: false,
      metricToDelete: {
        key: '',
        title: ''
      }
    }
  }

  componentDidMount() {
  }

  handleClickOpen = () => {
    this.setState({ modal: true })
  };

  handleClose = () => {
    this.setState({ modal: false })
  }

  showRemoveMetricDialog = (metricInfo) => {
    this.setState({
      closeDialog: true,
      metricToDelete: {
        key: metricInfo.key,
        title: metricInfo.title
      }
    })
  }

  confirmRemoveMetric = () => {
    console.log('confirm delete')
    console.log(this.state.metricToDelete.key)
    // this.props.removeMetric(this.state.metricToDelete.key)
  }

  Transition = props => <Slide direction="up" {...props} />

  /**
   * Render a grid item for react-gird-layout with a specific chart inside of it
   * @param chart The data and source information about the chart to be created inside of the grid item.
   * @returns A grid item with a chart inside of it.
   */
  renderGridItem = chart => (
    <div key={chart.key} style={{ paddingBottom: '3em', paddingRight: '1em', paddingLeft: '1em' }}>
      <Typography variant="headline" classes={{ root: this.props.classes.root }}>
        {chart.title}
        <IconButton className={this.props.classes.clearIcon} color="primary">
          <ClearIcon onClick={() => this.showRemoveMetricDialog(chart)} />
        </IconButton>
      </Typography>
      {this.renderChart(chart)}
    </div>
  )

  /**
   * Render a chart based on the chart type.
   * @param chart The data and source information about the chart to be created.
   * @returns A specified chart component.
   */
  renderChart = (chart) => {
    switch (chart.type) {
      case 'Doughnut':
        return <Doughnut data={chart.data} options={{ maintainAspectRatio: false }} />
      case 'Line':
        return <Line data={chart.data} options={{ maintainAspectRatio: false }} />
      case 'HorizontalBar':
        return <HorizontalBar data={chart.data} options={{ maintainAspectRatio: false }} />
      case 'Bar':
        return <Bar data={chart.data} options={{ maintainAspectRatio: false }} />
      default:
        return (<div>chart error</div>)
    }
  }

  render() {
    const { classes } = this.props

    return (
      <div className="content absolute top right left bottom" >
        <ResponsiveGridLayout
          className="layout"
          layouts={this.state.layout}
          rowHeight={100}
          autoSize
          breakpoints={{ lg: 1200 }}
          cols={{ lg: 12 }}
        >
          {this.renderGridItem(data)}
          {this.renderGridItem(data2)}
          {this.renderGridItem(data3)}
        </ResponsiveGridLayout>
        <Button variant="fab" className={classes.fab} onClick={this.handleClickOpen} data-tip="" data-for="new-chart">
          <TimelineIcon />
        </Button>
        <ReactTooltip
          id="new-chart"
          place="right"
          type="light"
          effect="solid"
          className="tooltip"
          getContent={() => (
            <ListItem dense>
              <ListItemText primary="Add new chart to dashboard" classes={{ primary: classes.listItemTooltip }} />
            </ListItem>
          )}
        />
        <Dialog
          id="new-metric-dialog"
          open={this.state.modal}
          onClose={this.handleClose}
          TransitionComponent={this.Transition}
          aria-labelledby="form-dialog-title"
        >
          <NewChartDialog />
        </Dialog>
        <Dialog
          id="delete-metric-dialog"
          open={this.state.closeDialog}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">Remove Metric?</DialogTitle>
          <DialogContent>
            <DialogContentText
              id="alert-dialog-description"
              classes={{ root: classes.root }}
            >
              Are you sure you want to remove the metric '<b>{this.state.metricToDelete.title}</b>' from your current dashboard view?'
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => this.setState({ closeDialog: false })} color="primary">
              Keep
            </Button>
            <Button onClick={this.confirmRemoveMetric} color="primary" autoFocus>
              Yes, Remove
            </Button>
          </DialogActions>
        </Dialog>
      </div>

    )
  }
}

Metrics.propTypes = {
  classes: PropTypes.object.isRequired,
}

function mapStateToProps(state) {

}
const enhance = compose(
  withStyles(styles),
  connect(mapStateToProps, {
  })
)

export default enhance(Metrics)
