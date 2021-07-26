import React from 'react';
import Navbar from "./Navbar/Navbar.js"
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Table from "./Table/table"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    fontFamily: "Roboto",
    minHeight: "95vh",
  },
  leftside: {
    flexGrow: 1,
    color: 'white'
  },
  rightside: {
    flexGrow: 1,
    backgroundColor: '#152D50',
    padding: '0 10px'

  }
}));

export default function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container width={"100%"}>
        <Grid item xs={12}>
          <Navbar />
        </Grid>
        <Grid item xs={8} className={classes.leftside}>
          <Table></Table>
        </Grid>
        <Grid item xs={4} className={classes.rightside}>
          rightside
          </Grid>
      </Grid>
    </div>
  );
}