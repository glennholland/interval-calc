import {
  alpha,
  Autocomplete,
  Box,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
} from '@mui/material';
import { getNoteColor } from '@util/colorUtils';
import { useState } from 'react';
import './App.css';
import Table from './Table';
import {
  adjustEnharmonic,
  NOTE_ORDER,
  Root,
  SCALE,
  scaleNameToTitleCase,
  SCALES,
} from './util/scaleUtils';

function App() {
  const [activeScale, setActiveScale] = useState<SCALE>('chromatic');
  const [accidental, setAccidental] = useState<'flat' | 'sharp'>('flat');
  const [activeNotes, setActiveNotes] = useState<Root[]>(['C']);

  const toggleNote = (note: Root) => {
    setActiveNotes((prev) => {
      const prevContainsNote = prev.includes(note);

      if (!prevContainsNote) {
        return [...prev, note];
      }

      const nextActiveNotes = prev.filter((n) => n !== note);

      if (nextActiveNotes.length === 0) {
        return ['C'];
      }

      return nextActiveNotes;
    });
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
      }}
    >
      <Box
        sx={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'flex-start',
          flexDirection: 'column',
          padding: '8px',
          gap: 1,
          justifyContent: 'flex-start',
          maxWidth: '600px',
        }}
      >
        <Paper
          sx={{
            display: 'flex',
            width: '100%',
            gap: 2,
            padding: 1,
            justifyContent: 'space-around',
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
          <FormControl>
            <InputLabel id="accidental-label">Accidental</InputLabel>
            <Select
              label="Accidental"
              labelId="accidental-label"
              value={accidental}
              onChange={(e) =>
                setAccidental(e.target.value as 'flat' | 'sharp')
              }
              size="small"
            >
              <MenuItem value="flat">Flat ♭</MenuItem>
              <MenuItem value="sharp">Sharp ♯</MenuItem>
            </Select>
          </FormControl>
        </Paper>
        <Box
          sx={{
            display: 'flex',
            width: '100%',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              width: '100%',
              justifyContent: 'space-around',
              marginTop: 1,
            }}
          >
            {NOTE_ORDER.slice(0, 6).map((note) => (
              <IconButton
                size="small"
                key={note}
                sx={{
                  border: `1px solid ${getNoteColor(note)}`,
                  backgroundColor: activeNotes.includes(note)
                    ? getNoteColor(note)
                    : alpha(getNoteColor(note), 0.2),

                  maxWidth: '36px',
                  maxHeight: '36px',
                }}
                onClick={() => toggleNote(note)}
              >
                <Box
                  sx={{
                    width: '30px',
                    height: '30px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: (t) =>
                      activeNotes.includes(note)
                        ? t.palette.getContrastText(getNoteColor(note))
                        : getNoteColor(note),
                  }}
                >
                  {accidental === 'flat' ? adjustEnharmonic(note) : note}
                </Box>
              </IconButton>
            ))}
          </Box>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              width: '100%',
              justifyContent: 'space-around',
              marginTop: 1,
            }}
          >
            {NOTE_ORDER.slice(6).map((note) => (
              <IconButton
                size="small"
                key={note}
                sx={{
                  border: `1px solid ${getNoteColor(note)}`,
                  backgroundColor: activeNotes.includes(note)
                    ? getNoteColor(note)
                    : alpha(getNoteColor(note), 0.2),

                  maxWidth: '36px',
                  maxHeight: '36px',
                }}
                onClick={() => toggleNote(note)}
              >
                <Box
                  sx={{
                    width: '30px',
                    height: '30px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: (t) =>
                      activeNotes.includes(note)
                        ? t.palette.getContrastText(getNoteColor(note))
                        : getNoteColor(note),
                  }}
                >
                  {accidental === 'flat' ? adjustEnharmonic(note) : note}
                </Box>
              </IconButton>
            ))}
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
            flexWrap: 'wrap',
          }}
        >
          <Box
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
              accidental={accidental}
              activeNotes={activeNotes}
            />
          </Box>
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
    </Box>
  );
}

export default App;
