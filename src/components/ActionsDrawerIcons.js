// This file is shared across the demos.

import React from 'react'
import { PropTypes } from 'prop-types'
import { List, ListItem, ListItemIcon, ListItemText } from 'material-ui/List'
import { withStyles } from 'material-ui/styles'
import Badge from 'material-ui/Badge'
import CloudOffIcon from '@material-ui/icons/CloudOff'
import HearingIcon from '@material-ui/icons/Hearing'
import StarIcon from '@material-ui/icons/Star'
import SettingsInputComponentIcon from '@material-ui/icons/SettingsInputComponent'
import MailIcon from '@material-ui/icons/Mail'
import DeleteIcon from '@material-ui/icons/Delete'
import ReportIcon from '@material-ui/icons/Report'

import FingerprintIcon from '@material-ui/icons/Fingerprint'
import WifiLockIcon from '@material-ui/icons/WifiLock'
import GpsFixedIcon from '@material-ui/icons/GpsFixed'
import LeakAddIcon from '@material-ui/icons/LeakAdd'
import VpnLockIcon from '@material-ui/icons/VpnLock'
import WhatsHotIcon from '@material-ui/icons/Whatshot'
import SettingsIcon from '@material-ui/icons/Settings'

import { Divider } from 'material-ui'

const styles = theme => ({
  badge: {
    width: '12px',
    height: '12px',
    top: '-6px',
    right: '-6px',
    fontSize: '0.6em'
  }
})

function ActionsDrawerIcons(props) {
  const { classes } = props
  return (
    <div>
      <ListItem button>
        <ListItemIcon>
          <FingerprintIcon />
        </ListItemIcon>
        <ListItemText primary="Steal Identity" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <WifiLockIcon />
        </ListItemIcon>
        <ListItemText primary="Hack Computer" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <GpsFixedIcon />
        </ListItemIcon>
        <ListItemText primary="Death From Above" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <LeakAddIcon />
        </ListItemIcon>
        <ListItemText primary="Proximity Crack" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <VpnLockIcon />
        </ListItemIcon>
        <ListItemText primary="Global Shutdown" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <Badge classes={{ badge: classes.badge }} badgeContent="" color="error">
            <WhatsHotIcon />
          </Badge>
        </ListItemIcon>
        <ListItemText primary="Recent Threats" />
      </ListItem>
      <Divider />
      <ListItem button>
        <ListItemIcon>
          <CloudOffIcon />
        </ListItemIcon>
        <ListItemText primary="Deny Service" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <StarIcon />
        </ListItemIcon>
        <ListItemText primary="Starred" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <SettingsInputComponentIcon />
        </ListItemIcon>
        <ListItemText primary="Remote Piolet Host" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <HearingIcon />
        </ListItemIcon>
        <ListItemText primary="Eavesdrop" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <MailIcon />
        </ListItemIcon>
        <ListItemText primary="Contact Support" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <DeleteIcon />
        </ListItemIcon>
        <ListItemText primary="Delete Profile" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <ReportIcon />
        </ListItemIcon>
        <ListItemText primary="Hide Trace" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <SettingsIcon />
        </ListItemIcon>
        <ListItemText primary="Settings" />
      </ListItem>
    </div>
  )
}

ActionsDrawerIcons.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles, { withTheme: true })(ActionsDrawerIcons)