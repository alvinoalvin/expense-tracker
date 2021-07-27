import React, { useState } from 'react';
import { Typography, TextField, Button, Snackbar } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import axios from "axios";

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

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function ExpenseForm(props) {
  const classes = useStyles();
  const [category, setCategory] = useState("");
  const [name, setName] = useState("");
  const [cost, setCost] = useState(0);
  const [snack, setSnack] = useState(false);
  const [alert, setAlert] = useState({
    message: '',
    severity: ''
  });

  function addExpense() {
    if (!category) {
      setCategory("Other")
    };

    let newExpense = {
      category: category,
      name: name,
      cost: parseFloat(cost)
    }


    return axios.post(`api/expenses`, newExpense)
      .then(function(response) {
        newExpense.id = response.data[0].id
        newExpense.date_created = response.data[0].date_created
        
        props.setRows([...props.rows, newExpense])

        Array.from(document.querySelectorAll("input")).forEach(
          input => (input.value = "")
        );

        setCategory("");
        setName("");
        setCost(0);
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setSnack(false);
  };

  function checkCost() {
    if (!category || category === '' || category === "") {
      setCategory("Other")
    }
    if (!name || name === "") {
      setAlert({ message: 'Please enter a Name!', severity: 'warning' })
      return false
    }
    if (cost <= 0 || !cost || cost === "") {
      setAlert({ message: 'Please enter a positive number!', severity: 'warning' })
      return false
    }
    return true
  }

  return (
    <div className={classes.expenseForm}>
      <Typography className={classes.formHeader} variant="h4">Add Expense</Typography>
      <TextField id="filled-basic" label="Category"
        variant="outlined"
        className={classes.expenseInput}
        onChange={(event) => setCategory(event.target.value)}
      />
      <TextField id="filled-basic" label="Name"
        variant="outlined"
        className={classes.expenseInput}
        onChange={(event) => setName(event.target.value)}
      />
      <TextField id="filled-basic" label="Cost"
        type="number"
        variant="outlined"
        className={classes.expenseInput}
        onChange={(event) => setCost(event.target.value)}
      />
      <Button variant="contained"
        className={classes.expenseSubmit}
        onClick={(event) => {
          if (!checkCost()) {
            setSnack(true)
          } else {
            addExpense()
            handleClose()
          }
        }}
      >
        Submit
        </Button>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={snack}
        key={'report-snack-bar'}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity={alert.severity}>{alert.message}</Alert>
      </Snackbar>
    </div>
  )
}