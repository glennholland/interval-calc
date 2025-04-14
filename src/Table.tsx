import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from './components/table';
import {
  NOTE_ORDER,
  Note,
  SCALE,
  SCALE_INTERVALS,
  adjustEnharmonic,
  computeScale,
  romanize,
} from './util/scaleUtils';

const DataTable = ({
  scale,
  variant,
  accidental,
}: {
  scale: SCALE;
  variant: 'intervals' | 'notes';
  accidental: 'flat' | 'sharp';
}) => {
  const computedNotes = NOTE_ORDER.map((n) => computeScale(n, scale));
  const computedIntervals = SCALE_INTERVALS[scale];

  const rows = variant === 'intervals' ? [computedIntervals] : computedNotes;

  const rowsWithAccidentals = rows.map((row) =>
    row.map((note) =>
      accidental === 'flat' && variant !== 'intervals'
        ? adjustEnharmonic(note as Note)
        : note
    )
  );

  return (
    <Table sx={{ border: (t) => `1px solid ${t.palette.primary.main}` }}>
      <TableHead>
        <TableRow
          key={rowsWithAccidentals.length}
          sx={{ backgroundColor: (t) => t.palette.primary.main }}
        >
          {rowsWithAccidentals[0].map((_, idx) => (
            <TableCell
              alignContent="center"
              sx={{
                minWidth: '30px',
                width: '30px',
                color: (t) => t.palette.primary.contrastText,
              }}
              key={idx}
            >
              {romanize(idx + 1)}
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {rowsWithAccidentals.map((row, idx) => (
          <TableRow
            key={idx}
            sx={{ borderBottomColor: (t) => t.palette.primary.main }}
          >
            {row.map((note, cIdx) => (
              <TableCell
                alignContent="center"
                sx={{
                  minWidth: '30px',
                  width: '30px',
                  borderRight:
                    cIdx < row.length - 1
                      ? (t) => `1px solid ${t.palette.divider}`
                      : 'none',
                }}
                key={note}
              >
                {note}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default DataTable;
