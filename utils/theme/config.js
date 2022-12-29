import { createTheme } from '@mui/material';

const themeOptions = {
    palette: {
        type: 'light',
        primary: {
          main: '#1F1769',
          light: '#1F1769',
          dark: '#1F1769',
        },
        secondary: {
          main: '#f50057',
        },
        text: {
          primary: '#1F1769',
          secondary: '#8F5FCA',
          disabled: '#EEEDF6',
          hint: '#1F1769',
        },
        divider: '#EEEDF6',
      },
    typography: {
        fontFamily:'Cabin',
        // color:'#1F1769',
        h1: {
          fontSize: 24,
          fontWeight: 700,
        },
        h2: {
          fontSize: 24,
          fontWeight: 700,
        },
        body1: {
          fontSize: 18,
        },
        button: {
          fontSize: 24,
          textTransform: 'capitalize',
          padding:'1rem 2rem',
        },
      },
  };
  
  const theme = createTheme(themeOptions);
//   const theme = createTheme({});
  
  export { theme }