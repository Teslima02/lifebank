import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import IClauncher from '../assets/ic_launcher.svg';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    margin: theme.spacing(3),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: 'transparent',
    boxShadow: theme.shadows[0],
    marginTop: theme.spacing(2),
  },
  image: {
    width: 100,
    height: 100,
  },
  menu: {
    margin: theme.spacing(2),
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <img src={IClauncher} alt="logo" className={classes.image} />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            
          </Typography>
          <Typography variant="h6" className={classes.menu}>
          Lite
          </Typography>
          <Typography variant="h6" className={classes.menu}>
          BOAT
          </Typography>
          <Typography variant="h6" className={classes.menu}>
          SmartBag
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
