import { DataGrid } from '@mui/x-data-grid';
import {
  IntervalNotes,
  intervalShortNames,
  NoteInterval,
  noteIntervals,
  notes,
} from './util';

const Table = () => {
  return (
    <DataGrid<IntervalNotes>
      rows={notes}
      columns={noteIntervals.map((interval) => ({
        field: interval,
        headerName: interval,
        align: 'center',
        headerAlign: 'center',
        renderHeader: (params) => {
          return <div>{intervalShortNames[params.field as NoteInterval]}</div>;
        },
        width: 60,
        sortable: interval === 'unison',
      }))}
      sx={{ width: '100%' }}
      getRowId={(row) => row.unison}
      hideFooter
      rowHeight={30}
    />
  );
};

export default Table;
