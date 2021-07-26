import { createTheme } from '@material-ui/core/styles';
const theme = createTheme({
  palette: {
    primary: {
      light: "#395277",
      main: "#22406F",
      dark: "#152D50",
    },
    secondary: {
      light: "#F2E7C0",
      main: "#E9D48A",
      dark: "#B99E41",
    },
  },
  MuiFormLabel: {
    root: {
      '&$focused': {
        color: '#E9D48A'
      }
    }
  }
});

export default theme