import {
  Autocomplete,
  Box,
  CssBaseline,
  Paper,
  TextField,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useMemo, useState } from 'react';
import './App.css';
import Table from './Table';
import { SCALE, SCALES } from './util';

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

  const [activeScale, setActiveScale] = useState<SCALE>('chromatic');
  const [variant, setVariant] = useState<'intervals' | 'notes'>('notes');

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'flex-start',
          flexDirection: 'column',
          padding: '20px',
          gap: 4,
          justifyContent: 'flex-start',
        }}
      >
        <Typography variant="h2">Intervals</Typography>
        <Box
          sx={{
            display: 'flex',
            width: '100%',
            gap: 2,
            background: (t) => t.palette.divider,
            padding: 2,
          }}
        >
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Autocomplete
              value={activeScale}
              onChange={(_e, value) => setActiveScale(value as SCALE)}
              options={SCALES}
              disableClearable
              renderInput={(params) => <TextField label="Scale" {...params} />}
              sx={{ width: '200px' }}
              blurOnSelect
              size="small"
            />
          </Box>
          <Autocomplete
            value={variant}
            onChange={(_e, value) => setVariant(value as 'intervals' | 'notes')}
            sx={{ width: '200px' }}
            size="small"
            disableClearable
            blurOnSelect
            options={['intervals', 'notes']}
            renderInput={(params) => <TextField label="Variant" {...params} />}
          />
        </Box>
        <Paper
          sx={{
            flex: 1,
            width: '100%',
            height: 'fit-content',
            maxWidth: '722px',
            maxHeight: 'fit-content',
            minWidth: 0,
            flexShrink: 1,
          }}
        >
          <Table scale={activeScale} variant={variant} />
        </Paper>
      </Box>
    </ThemeProvider>
  );
}

export default App;
