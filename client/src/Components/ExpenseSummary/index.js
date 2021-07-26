import React from 'react';
import { Typography, TextField, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import theme from "../theme";


const useStyles = makeStyles((theme) => ({
  expenseSummary: {
    color: "white",
    width: "80%",
    margin: 'auto',
    paddingTop: "20%",
    paddingBottom: "20%",
  }
}));


export default function ExpenseSummary() {
  const classes = useStyles();

  return (
    <div className={classes.expenseSummary}>
      <hr
        color={theme.palette.secondary.main}
        width="100%"
      />
      <div>
        Current Total: $
        {/* <br />
        Monthly Total: $ */}
      </div>
    </div>
  )
}