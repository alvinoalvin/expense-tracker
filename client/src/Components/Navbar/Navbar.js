import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  header: {
    color: "white",
    backgroundColor: '#395277',
    textAlign: "center",
  },
  headerH3: {
    width: '100%'
  }
}));


export default function Navbar() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <AppBar className={classes.header} position="sticky">
        <Toolbar>
          <Typography className={classes.headerH3} variant="h3">Expense Tracker</Typography>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  )
}