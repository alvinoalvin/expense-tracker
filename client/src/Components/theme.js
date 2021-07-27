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
  overrides: {
    MuiInputLabel: {
      root: {
        color: "#B99E41"
      }
    }
  }
});

export default theme