import { createTheme, responsiveFontSizes } from '@material-ui/core';

let darkTheme = createTheme({
    palette: {
      background: {
        default: "#0A131A",
        paper: '#0A131A'
      },
      primary: {
        main: '#fff',
        light: '#121A21'
      },
      secondary: {
        main: '#D3CBB8',
        strok: 'rgba(255, 255, 255, 0.12)'
      }
    },
    typography: {
      fontFamily: "'Poppins',' sans-serif",
    },
    shape: {
      borderRadius: 5
    }
});
darkTheme = responsiveFontSizes(darkTheme);

let lightTheme = createTheme({
    palette: {
      background: {
        default: "#fff",
        paper: '#fff'
      },
      primary: {
        main: '#2b2d42',
        light: '#F1F1F1',
      },
      secondary: {
        main: '#D3CBB8',
        strok: 'rgba(18, 26, 33, 0.08)'
      }
    },
    typography: {
      fontFamily: "'Poppins',' sans-serif"
    },
    shape: {
      borderRadius: 5
    }
});
lightTheme = responsiveFontSizes(lightTheme);

export { darkTheme, lightTheme }