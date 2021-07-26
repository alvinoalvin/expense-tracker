import React from 'react';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import Navbar from "./Navbar/Navbar";
import ExpenseForm from "./ExpenseForm/ExpenseForm";
import Table from "./Table/table";
import theme from "./theme";



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
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <Grid container width={"100%"}>
          <Grid item xs={12}>
            <Navbar />
          </Grid>
          <Grid item xs={8} className={classes.leftside}>
            <Table />
          </Grid>
          <Grid item xs={4} className={classes.rightside}>
            <ExpenseForm />
          </Grid>
        </Grid>
      </div>
    </ThemeProvider>
  );
}