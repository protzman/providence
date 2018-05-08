import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Typography from 'material-ui/Typography'
import ClearIcon from '@material-ui/icons/Clear'
import IconButton from 'material-ui/IconButton'
import { Doughnut, Bar, Line, HorizontalBar } from 'react-chartjs-2'
import { Responsive, WidthProvider } from 'react-grid-layout'
import Metric from './Metric'


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
        borderWidth: 1,
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
        borderWidth: 1,
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
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'Augest', 'September', 'October'],
    datasets: [
      {
        label: 'Plutonium Network',
        fill: true,
        lineTension: 0.1,
        backgroundColor: 'rgba(143,188,187,0.1)',
        borderColor: 'rgba(143,188,187,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 2,
        pointHitRadius: 10,
        data: [65, 59, 80, 81, 56, 55, 40, 69, 69, 21]
      },
      {
        label: 'Titanium Network',
        fill: true,
        lineTension: 0.1,
        backgroundColor: 'rgba(136,192,208,0.1)',
        borderColor: 'rgba(136,192,208,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(136,192,208,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(136,192,208,1)',
        pointHoverBorderColor: 'rgba(136,192,208,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 2,
        pointHitRadius: 10,
        data: [23, 29, 26, 100, 60, 58, 60, 82, 82, 75]
      },
      {
        label: 'Uranium Network',
        fill: true,
        lineTension: 0.1,
        backgroundColor: 'rgba(129,161,193,0.1)',
        borderColor: 'rgba(129,161,193,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(129,161,193,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(129,161,193,1)',
        pointHoverBorderColor: 'rgba(129,161,193,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 2,
        pointHitRadius: 10,
        data: [44, 123, 322, 256, 222, 180, 145, 82, 115, 115]
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
})

class Metrics extends Component {
  constructor(props) {
    super(props)

    this.state = {
      layout: {
        lg: [{
          i: 'a', x: 0, y: 0, w: 4, h: 3, isResizeable: true
        },
        {
          i: 'd', x: 6, y: 0, w: 8, h: 3, isResizeable: true
        },
        {
          i: 'c', x: 0, y: 4, w: 12, h: 3, isResizeable: true
        }]
      }
    }
  }

  renderGridItem = chart => (
    <div key={chart.key} style={{ paddingBottom: '3em', paddingRight: '1em', paddingLeft: '1em' }}>
      <Typography variant="headline" classes={{ root: this.props.classes.root }}>
        {chart.title}
        <IconButton className={this.props.classes.clearIcon} color="primary">
          <ClearIcon />
        </IconButton>
      </Typography>
      {this.renderChart(chart)}
    </div>
  )

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
        <Typography className="contentheader" classes={{ root: classes.root }} variant="display3" gutterBottom>
        Network Metrics
        </Typography>
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
      </div>)
  }
}

Metrics.propTypes = {
  classes: PropTypes.object.isRequired,
}
export default withStyles(styles)(Metrics)
