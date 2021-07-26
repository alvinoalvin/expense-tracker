import React, { useState } from 'react';
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

function createData(id, category, name, cost, datePurchased) {
  return { id, category, name, cost, datePurchased };
};

export default function App() {
  const classes = useStyles();
  const [rows, setRows] = useState([
    createData(0, 'Alternative Investments', 'Pokemon Vivid Voltage ETB', "$60.00", "5/20/2021"),
    createData(1, 'Alternative Investments', 'Pokemon Vivid Voltage ETB', "$60.00", "5/20/2021"),
    createData(2, 'Alternative Investments', 'Pokemon Vivid Voltage ETB', "$60.00", "5/20/2021"),

  ]);

  return (
    <ThemeProvider theme={theme}>
      <Grid
        container
        className={classes.root}
      >
        <Grid item xs={12}>
          <Navbar />
        </Grid>
        <Grid item xs={8} className={classes.leftside}>
          <Table
            rows={rows}
            setRows={setRows}
          />
        </Grid>
        <Grid item xs={4} className={classes.rightside}>
          <ExpenseForm
            rows={rows}
            setRows={setRows}
          />
          <ExpenseSummary

          />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}