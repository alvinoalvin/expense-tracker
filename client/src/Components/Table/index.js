import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import { TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Checkbox } from '@material-ui/core';
import theme from "../theme";

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
});

const header = (
  <TableHead>
    <TableRow>
      <StyledTableCell align="left">
        <Checkbox />
      </StyledTableCell>
      <StyledTableCell align="left">Category</StyledTableCell>
      <StyledTableCell align="left">Name</StyledTableCell>
      <StyledTableCell align="left">Cost</StyledTableCell>
      <StyledTableCell align="left">Date Purchased</StyledTableCell>
    </TableRow>
  </TableHead>
);
export default function CustomizedTables(props) {
  const classes = useStyles();
  const rows = props.rows;

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        {header}
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}
            // onClick={(event) => handleClick(event, row.id)}
            >
              <StyledTableCell align="left">
                < Checkbox />
              </StyledTableCell>
              <StyledTableCell align="left">{row.category}</StyledTableCell>
              <StyledTableCell align="left">{row.name}</StyledTableCell>
              <StyledTableCell align="left">{row.cost}</StyledTableCell>
              <StyledTableCell align="left">{row.datePurchased}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}