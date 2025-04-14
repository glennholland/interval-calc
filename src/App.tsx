import {
  Autocomplete,
  Box,
  CssBaseline,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useMemo, useState } from 'react';
import './App.css';
import Table from './Table';
import { SCALE, scaleNameToTitleCase, SCALES } from './util/scaleUtils';

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
  const [accidental, setAccidental] = useState<'flat' | 'sharp'>('flat');

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
        <Typography variant="h4">Intervals</Typography>
        <Box
          sx={{
            display: 'flex',
            width: '100%',
            gap: 2,
            background: (t) => t.palette.divider,
            padding: 2,
            flexWrap: 'wrap',
          }}
        >
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Autocomplete
              value={activeScale}
              onChange={(_e, value) => setActiveScale(value as SCALE)}
              options={SCALES}
              disableClearable
              renderInput={(params) => <TextField label="Scale" {...params} />}
              getOptionLabel={(option) => scaleNameToTitleCase(option)}
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
            getOptionLabel={(option) =>
              option === 'intervals' ? 'Intervals' : 'Notes'
            }
            renderInput={(params) => <TextField label="Variant" {...params} />}
          />
          {variant === 'notes' && (
            <FormControl>
              <InputLabel id="accidental-label">Accidental</InputLabel>
              <Select
                label="Accidental"
                labelId="accidental-label"
                value={accidental}
                onChange={(e) =>
                  setAccidental(e.target.value as 'flat' | 'sharp')
                }
                sx={{ width: '200px' }}
                size="small"
              >
                <MenuItem value="flat">Flat ♭</MenuItem>
                <MenuItem value="sharp">Sharp ♯</MenuItem>
              </Select>
            </FormControl>
          )}
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
            flexWrap: 'wrap',
          }}
        >
          <Paper
            sx={{
              flex: 1,
              width: '100%',
              height: 'fit-content',
              maxWidth: '722px',
              maxHeight: 'fit-content',

              flexShrink: 1,
              minWidth: 'fit-content',
            }}
          >
            <Table
              scale={activeScale}
              variant={variant}
              accidental={accidental}
            />
          </Paper>
          {/* <Box
            sx={{
              flex: 1,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
           <Cycle accidental={accidental} />
          </Box> */}
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
