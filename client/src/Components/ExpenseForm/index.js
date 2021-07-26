import React from 'react';
import { Typography, TextField, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import theme from "../theme";


const useStyles = makeStyles((theme) => ({
  formHeader: {
    width: '100%',
    color: theme.palette.secondary.main,
    marginBottom: '20px',
    marginTop: '10px',
  },
  expenseForm: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center"
  },
  expenseInput: {
    width: "200px",
    margin: "auto",
    marginTop: "10px",
    marginBottom: "15px",
    backgroundColor: "white",
    borderRadius: '20px',
    textAlign: 'center'
  },
  expenseInputFocused: {
    color: theme.palette.secondary.main,
  },
  expenseSubmit: {
    width: "200px",
    margin: "auto",
    marginTop: "30px",
    marginBottom: "10px",
    backgroundColor: theme.palette.secondary.main,
    '&$hover': {
      color: theme.palette.secondary.dark
    },
  }

}));


export default function ExpenseForm() {
  const classes = useStyles();

  return (
    <div className={classes.expenseForm}>
      <Typography className={classes.formHeader} variant="h4">Add Expense</Typography>
      <TextField id="filled-basic" label="Category"
        variant="outlined"
        className={classes.expenseInput}
        classes={{ focused: classes.expenseInputFocused }}
      />
      <TextField id="filled-basic" label="Title"
        variant="outlined"
        className={classes.expenseInput}
        classes={{ focused: classes.expenseInputFocused }}
      />
      <TextField id="filled-basic" label="Cost"
        variant="outlined"
        className={classes.expenseInput}
        classes={{ focused: classes.expenseInputFocused }}
      />
      <Button variant="contained" className={classes.expenseSubmit}>Submit</Button>
    </div>
  )
}