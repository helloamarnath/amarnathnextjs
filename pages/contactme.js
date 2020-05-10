import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({


  paper: {
    margin: theme.spacing(4, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },

}));

export default function Contactme() {
  const classes = useStyles();

  return (
    <Grid container component="main" >
      <CssBaseline />
      <Grid item xs={12} sm={12} md={12} component={Paper} elevation={false} square>
        <div className={classes.paper}>
          <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdIsARvfS5MjLwoRPvJdSujSwcsnqNb8n-ueR2FzLt_95Trkw/viewform?embedded=true" width="100%" height="1000" frameborder="0" marginheight="0" marginWidth="0">Loading…</iframe>
        </div>
      </Grid>
    </Grid>
  );
}