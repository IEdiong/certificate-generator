import { createTheme } from '@mui/material/styles';
// import { red } from '@mui/material/colors';

// A custom theme for this app
const theme = createTheme({
  cssVariables: true,
  palette: {
    mode: 'dark',
    primary: {
      main: '#fdd649',
    },
    secondary: {
      main: '#19857b',
    },
    //   error: {
    //     main: red.A400,
    //   },
    background: {
      default: '#121212',
    },
    text: {
      primary: '#CFCFCF',
    },
  },
  typography: {
    h1: {
      fontFamily: 'Space Grotesk',
      fontWeight: 700,
      fontSize: 42,
    },
    h2: {
      fontFamily: 'poppins',
      fontWeight: 700,
      fontSize: 20,
      color: '#FD642E',
    },
    fontFamily: [
      'poppins',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
  components: {
    MuiTextField: {
      variants: [
        {
          props: {
            variant: 'standard',
          },
          style: {
            borderColor: 'GrayText',
            '&::placeholder': {
              color: 'GrayText',
            },
          },
        },
      ],
    },
    MuiButton: {
      variants: [
        {
          props: {
            variant: 'contained',
          },
          style: {
            height: '44px',
          },
        },
      ],
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

export default theme;
