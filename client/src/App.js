import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';


function App() {
  return (
    <React.Fragment>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h3">Expense Tracker</Typography>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </React.Fragment>
  );
}
export default App;