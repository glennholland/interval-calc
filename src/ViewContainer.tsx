import { Menu } from '@mui/icons-material';
import {
  AppBar,
  Box,
  createTheme,
  CssBaseline,
  IconButton,
  ThemeProvider,
  Toolbar,
  useMediaQuery,
} from '@mui/material';
import { useMemo } from 'react';
import App from './App';

const ViewContainer = () => {
  const prefersDarkMode =
    useMediaQuery('(prefers-color-scheme: dark)') && false;
  const theme = useMemo(
    () =>
      createTheme(
        prefersDarkMode
          ? {
              palette: {
                mode: 'dark',
              },
            }
          : {
              palette: {
                mode: 'light',
                background: {
                  default: '#e6d9c7',
                  paper: '#d1c8b2',
                },
                primary: {
                  main: '#004306',
                },
              },
            }
      ),
    [prefersDarkMode]
  );
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ width: '100vw', height: '100vh' }}>
        <AppBar position="sticky" color="primary" sx={{ maxHeight: '40px' }}>
          <Toolbar sx={{ maxHeight: '40px', minHeight: '40px !important' }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <img src="/logo-16-9.svg" height={32} alt="logo" />
            </Box>
            <Box sx={{ flexGrow: 1 }} />
            <IconButton>
              <Menu />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Box sx={{ flex: 1 }}>
          <App />
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default ViewContainer;
