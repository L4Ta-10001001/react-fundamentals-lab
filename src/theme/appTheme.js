import { createTheme } from '@mui/material/styles'

const appTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1f6f78',
    },
    secondary: {
      main: '#d97d54',
    },
    background: {
      default: '#f5f1ea',
      paper: '#ffffff',
    },
    text: {
      primary: '#1c1a1d',
      secondary: '#5c5761',
    },
  },
  shape: {
    borderRadius: 16,
  },
  typography: {
    fontFamily: '"IBM Plex Sans", "Segoe UI", sans-serif',
    h1: {
      fontFamily: '"Playfair Display", "Times New Roman", serif',
      fontWeight: 600,
    },
    h2: {
      fontFamily: '"Playfair Display", "Times New Roman", serif',
      fontWeight: 600,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 12,
          fontWeight: 600,
        },
      },
    },
  },
})

export default appTheme
