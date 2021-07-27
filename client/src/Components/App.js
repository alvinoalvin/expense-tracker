import React, { useState, useEffect } from 'react';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import Navbar from "./Navbar";
import ExpenseForm from "./ExpenseForm";
import ExpenseSummary from "./ExpenseSummary";
import Table from "./Table";
import theme from "./theme";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    fontFamily: "Roboto",
    height: "90vh"
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
  const [rows, setRows] = useState([]);
  const [total, setTotal] = useState(0);


  useEffect(() => {
    axios.get(`http://localhost:8080/api/expenses`)
      .then(response => {
        setRows(response.data);
        let tempTotal = 0;
        for (let data of response.data) {
          tempTotal += parseFloat(data.cost);
        }
        setTotal(tempTotal);
      }).catch(error => console.log(error));
  }, [rows, setRows]);

  return (
    <ThemeProvider theme={theme}>
      <Grid container
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
            createData={createData}
          />
          <ExpenseSummary total={total} />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}