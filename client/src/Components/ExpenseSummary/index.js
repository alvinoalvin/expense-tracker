import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import theme from "../theme";


const useStyles = makeStyles(() => ({
  expenseSummary: {
    color: "white",
    width: "80%",
    margin: 'auto',
    paddingTop: "20%",
    paddingBottom: "20%",
  },
  currTotal: {
    marginTop: "20px"
  }
}));


export default function ExpenseSummary(props) {
  const classes = useStyles();

  return (
    <div className={classes.expenseSummary}>
      <hr
        color={theme.palette.secondary.main}
        width="100%"
      />
      <div className={classes.currTotal}>
        Current Total: $ {props.total}
      </div>
    </div>
  )
}