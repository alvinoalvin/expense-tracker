import React from 'react';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import Navbar from "./Navbar";
import ExpenseForm from "./ExpenseForm";
import ExpenseSummary from "./ExpenseSummary";
import Table from "./Table";
import theme from "./theme";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    fontFamily: "Roboto",
    height: "100vh",
  },
  leftside: {
    flexGrow: 1,
    color: 'white',
    height: "100%"
  },
  rightside: {
    flexGrow: 1,
    backgroundColor: '#152D50',
    padding: '0 10px'

  },
}));

export default function App() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Grid container className={classes.root}>
        <Grid item xs={12}>
          <Navbar />
        </Grid>
        <Grid item xs={8} className={classes.leftside}>
          <Table />
        </Grid>
        <Grid item xs={4} className={classes.rightside}>
          <ExpenseForm />
          <ExpenseSummary />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}