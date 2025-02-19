import { Box, CssBaseline, Paper, useMediaQuery } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useMemo } from 'react';
import './App.css';
import Table from './Table';

function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
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
              },
            }
      ),
    [prefersDarkMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          padding: '20px',
          gap: 2,
        }}
      >
        <Paper
          sx={{
            flex: 1,
            width: '100%',
            height: '100%',
            maxWidth: '722px',
            maxHeight: '417px',
          }}
        >
          <Table />
        </Paper>
      </Box>
    </ThemeProvider>
  );
}

export default App;
