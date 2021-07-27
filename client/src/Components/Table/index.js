import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import {
  TableBody, TableCell, TableContainer,
  TableHead, TableRow,
  IconButton
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import theme from "../theme";
import axios from "axios";
const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.secondary.light,
    color: theme.palette.common.black,
    fontWeight: 'bold',
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
  container: {
    height: "100%",
  }
});

const header = (
  <TableHead>
    <TableRow>
      <StyledTableCell align="left"></StyledTableCell>
      <StyledTableCell align="left">Category</StyledTableCell>
      <StyledTableCell align="left">Name</StyledTableCell>
      <StyledTableCell align="left">Cost</StyledTableCell>
      <StyledTableCell align="left">Date Purchased</StyledTableCell>
    </TableRow>
  </TableHead>
);
export default function CustomizedTables(props) {
  const classes = useStyles();
  const { rows, setRows } = props;

  function deleteExpense(id) {
    return axios.delete(`api/expenses/?array=[${id}]`, { id })
      .then(function(response) {
        const expenseCopy = rows.filter((expense) => {
          if (expense.id !== id) {
            return expense
          }
          return null;
        });
        setRows(expenseCopy);
      })
      .catch(function(error) {
        console.log(error);
      });
  }
  return (
    <TableContainer className={classes.container} >
      <Table className={classes.table} aria-label="customized table">
        {header}
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell align="left">
                <IconButton
                  aria-label="delete"
                  onClick={(event) => {
                    if (window.confirm('Are you sure you want to delete?')) {
                      deleteExpense(row.id);
                    }
                  }}>
                  <DeleteIcon />
                </IconButton>
              </StyledTableCell>
              <StyledTableCell align="left">{row.category}</StyledTableCell>
              <StyledTableCell align="left">{row.name}</StyledTableCell>
              <StyledTableCell align="left">${row.cost}</StyledTableCell>
              <StyledTableCell align="left">{row.date_created.substring(0, 10)}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}