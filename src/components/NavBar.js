import React from 'react';
import {
  AppBar, Toolbar, Typography, Button, IconButton, withStyles
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { navBarStyles } from '../assets/styles/styles'

const NavBar = ({ classes }) => (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Shopping Cart
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
  
export default withStyles(navBarStyles)(NavBar);
