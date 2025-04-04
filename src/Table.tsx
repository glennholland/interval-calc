import { DataGrid } from '@mui/x-data-grid';
import {
  NOTE_ORDER,
  SCALE,
  SCALE_INTERVALS,
  computeScale,
  romanize,
} from './util';

const Table = ({
  scale,
  variant,
}: {
  scale: SCALE;
  variant: 'intervals' | 'notes';
}) => {
  const computedNotes = NOTE_ORDER.map((n) => computeScale(n, scale));
  const computedIntervals = SCALE_INTERVALS[scale];

  const rows = variant === 'intervals' ? [computedIntervals] : computedNotes;
  return (
    <DataGrid<string[]>
      rows={rows}
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
