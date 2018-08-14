import React from 'react'
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button
} from '@material-ui/core'

const styles = {
  root: {
    flexGrow: 1
  },
  flex: {
    flexGrow: 1
  },
  menuButton: {
    marginleft: -12,
    marginRight: 20
  }
}

export const Navbar = ({ headline }) => (
  <div style={styles.root}>
    <AppBar position="static">
      <Toolbar>
        <IconButton style={styles.menuButton} color="inherit">
          Icon
        </IconButton>
        <Typography variant="headline" color="inherit" style={styles.flex}>
          {headline}
        </Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  </div>
)
