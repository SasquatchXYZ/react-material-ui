import {createMuiTheme} from '@material-ui/core/styles';

export default createMuiTheme({
  typography: {
    useNextVariants: true
  },
  palette: {
    primary: {
      light: '#FF62B9',
      main: '#FF1589',
      dark: '#C6005C',
      contrastText: '#FAFAFA'
    },
    secondary: {
      light: '#B0FF57',
      main: '#76FF03',
      dark: '#32CB00',
      contrastText: '#424242'
    }
  }
});