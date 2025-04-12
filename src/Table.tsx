import { DataGrid } from '@mui/x-data-grid';
import {
  NOTE_ORDER,
  Note,
  SCALE,
  SCALE_INTERVALS,
  adjustEnharmonic,
  computeScale,
  romanize,
} from './util';

const Table = ({
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
      accidental === 'flat' ? adjustEnharmonic(note as Note) : note
    )
  );

  return (
    <DataGrid<string[]>
      rows={rowsWithAccidentals}
      columns={Array.from(new Array(rows[0].length)).map((_, i) => ({
        field: romanize(i + 1),
        headerName: romanize(i + 1),
        type: 'string',
        align: 'center',
        headerAlign: 'center',
        renderCell: (params) => {
          return `${params.row[i]}`;
        },
        flex: 1,
        width: 60,
        sortable: true,
        disableColumnMenu: true,
      }))}
      sx={{ width: '100%', height: 'fit-content' }}
      getRowId={(row) => row[0]}
      hideFooter
      rowHeight={30}
      rowSelection={false}
    />
  );
};

export default Table;
