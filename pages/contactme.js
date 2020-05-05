import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Contactme() {
  const classes = useStyles();

  return (
    <Grid container component="main" >
      <CssBaseline />
      <Grid item xs={false} sm={false} md={6} className={classes.image} />
      <Grid item xs={12} sm={12} md={6} component={Paper} elevation={false} square>
        <div className={classes.paper}>
          <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdIsARvfS5MjLwoRPvJdSujSwcsnqNb8n-ueR2FzLt_95Trkw/viewform?embedded=true" width="640" height="1175" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
        </div>
      </Grid>
    </Grid>
  );
}