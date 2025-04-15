import { Box } from '@mui/material';
import { getNoteColor } from '@util/colorUtils';
import { Table, TableBody, TableCell, TableRow } from './components/table';
import {
  DIATONIC_CHORD_SCALES,
  NOTE_ORDER,
  Root,
  SCALE,
  SCALE_INTERVALS,
  adjustEnharmonic,
  computeScale,
  isDiatonicChordScale,
  romanize,
} from './util/scaleUtils';

const DataTable = ({
  scale,

  accidental,
  activeNotes,
}: {
  scale: SCALE;
  accidental: 'flat' | 'sharp';
  activeNotes: Root[];
}) => {
  const computedNotes = NOTE_ORDER.filter((n) => activeNotes.includes(n)).map(
    (n) => computeScale(n, scale)
  );
  const computedIntervals = SCALE_INTERVALS[scale];

  const rowsWithAccidentals = computedNotes.map((row) =>
    row.map((note) => (accidental === 'flat' ? adjustEnharmonic(note) : note))
  );

  return (
    <Box sx={{}}>
      <Box sx={{}}>Scale Degrees</Box>
      <Table sx={{ backgroundColor: (t) => t.palette.background.paper }}>
        <TableBody>
          <TableRow key={rowsWithAccidentals.length} sx={{ padding: '0 4px' }}>
            {rowsWithAccidentals[0].map((_, idx) => (
              <TableCell
                alignContent="center"
                sx={{
                  minWidth: '30px',
                  width: '30px',
                }}
                key={idx}
              >
                {romanize(idx + 1)}
              </TableCell>
            ))}
          </TableRow>
        </TableBody>
      </Table>

      <Box sx={{}}>Intervals</Box>
      <Table sx={{ backgroundColor: (t) => t.palette.background.paper }}>
        <TableBody>
          <TableRow key={'intervals'} sx={{ padding: '0 4px' }}>
            {computedIntervals.map((interval) => (
              <TableCell key={interval}>{interval}</TableCell>
            ))}
          </TableRow>
        </TableBody>
      </Table>

      {isDiatonicChordScale(scale) && (
        <>
          <Box sx={{}}>Chords</Box>
          <Table sx={{ backgroundColor: (t) => t.palette.background.paper }}>
            <TableBody>
              <TableRow key={'intervals'} sx={{ padding: '0 4px' }}>
                {DIATONIC_CHORD_SCALES[scale].map((chord) => (
                  <TableCell key={chord}>{chord}</TableCell>
                ))}
              </TableRow>
            </TableBody>
          </Table>
        </>
      )}
      <Box sx={{}}>Notes</Box>

      <Table
        sx={{
          backgroundColor: (t) => t.palette.background.paper,
        }}
      >
        <TableBody>
          {rowsWithAccidentals.map((row, idx, arr) => {
            const backgroundColor = getNoteColor(activeNotes[idx]);
            return (
              <TableRow
                key={idx}
                sx={{
                  height: '36px',
                  padding: '0 4px',
                }}
                hideBorders
              >
                {row.map((note: Root, cIdx, cArr) => (
                  <TableCell
                    alignContent="center"
                    sx={{
                      minWidth: '30px',
                      width: '30px',
                      color: (t) => t.palette.getContrastText(backgroundColor),
                      padding: '0px',
                    }}
                    key={note}
                  >
                    <Box
                      sx={{
                        width: '100%',
                        height: '26px',
                        justifyContent: 'center',
                        borderRadius: '50%',
                        borderTopRightRadius:
                          cIdx === cArr.length - 1 ? '13px' : '0px',
                        borderBottomRightRadius:
                          cIdx === cArr.length - 1 ? '13px' : '0px',
                        borderTopLeftRadius: cIdx === 0 ? '13px' : '0px',
                        borderBottomLeftRadius: cIdx === 0 ? '13px' : '0px',
                        backgroundColor,
                        fontSize: '0.9rem',
                        display: 'flex',
                        alignItems: 'center',
                      }}
                    >
                      {note}
                    </Box>
                  </TableCell>
                ))}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Box>
  );
};

export default DataTable;
