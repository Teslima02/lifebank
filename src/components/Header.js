import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import ButtonAppBar from './ButtonAppBar';
import BackgroundImage from '../assets/back_drop_image.svg';
import AccountCircle from '@material-ui/icons/AccountCircle';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import { Paper, TextField, Grid, Typography, Button, InputAdornment, IconButton } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    minHeight: '950px',
    // background: `green url(${BackgroundImage}) right no-repeat`,
    backgroundImage: `url(${BackgroundImage})`,
    backgroundColor: '#6DB3F2',
    backgroundSize: 'cover',
    backgroundPosition: 'top center',
    position: 'relative',
    overflow: 'hidden',
  },
  margin: {
    margin: theme.spacing(2,0,2,0),
    '& label.Mui-focused': {
      color: '#fff',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#fff',
      // backgroundColor: 'black',
    },
  },
  textField: {
    margin: theme.spacing(1.5, 0),
  },
  paper: {
    width: 500,
    backgroundColor: '#1d4568',
    padding: theme.spacing(10, 10, 1, 10),
  },
  innerPaper: {
    padding: theme.spacing(10, 0, 10, 0),
  },
  content: {
    padding: theme.spacing(35, 10, 10, 10),
    color: '#fff',
  },
  contentColor: {
    color: 'grey',
  },
  text: {
    color: 'white',
  },
  createAccountText: {
    color: 'blue',
  },
  button: {
    color: '#fff',
    backgroundColor: 'blue',
    borderRadius: 30,
  },
}));

export default function Header() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  return (
    <div className={classes.root}>
      <ButtonAppBar />
      <Grid container spacing={3}>
      <Grid item xs={12} md={6} lg={6}>
        <Typography variant="h5" className={classes.content}>
          Save as many lives as quickly as you can
          <br />
          <Typography variant="p" className={classes.contentColor}>
            - Tuboson Temie
          </Typography>
        </Typography>
      </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <Paper elevation={3} className={classes.paper}>
              <Typography variant="h6" className={classes.text}>
                Login
              </Typography>
              <Typography variant="h6" className={classes.text}>
                Signin into your account to continue.
              </Typography>
              <div className={classes.innerPaper}>
                <TextField
                  className={classes.margin}
                  id="input-with-icon-textfield"
                  label="Email address"
                  fullWidth
                  placeholder="name@example.com"
                  InputLabelProps={{
                    classes: {
                      root: classes.text,
                      focused: "focused"
                    }
                  }}
                  InputProps={{
                    className: classes.text,
                    startAdornment: (
                      <InputAdornment position="start">
                        <AccountCircle />
                      </InputAdornment>
                    ),
                  }}
                />
                <TextField
                  className={classes.margin}
                  id="input-with-icon-textfield"
                  label="Password"
                  placeholder="Password"
                  type={values.showPassword ? 'text' : 'password'}
                  fullWidth
                  InputLabelProps={{
                    classes: {
                      root: classes.text,
                    }
                  }}
                  InputProps={{
                    className: classes.text,
                    startAdornment: (
                      <InputAdornment position="start">
                        <VpnKeyIcon />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {values.showPassword ? <Visibility style={{fill: "#fff"}} /> : <VisibilityOff style={{fill: "#fff"}} />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
                <br />
                <Button variant="contained" className={classes.button}>
                  Sign In
                  <IconButton><ArrowRightAltIcon style={{fill: "#fff"}} /></IconButton>
                </Button>
              </div>
              <Typography variant="h6" className={classes.text}>
                Not Registered? <span className={classes.createAccountText}>Create Account</span>
              </Typography>
            </Paper>
          </Grid>
      </Grid>
    </div>
  );
}
