import { Box, Divider } from '@mui/material';
import { adjustEnharmonic, CYCLE_OF_FIFTHS } from '../../util/scaleUtils';

const Cycle = ({ accidental }: { accidental: 'flat' | 'sharp' }) => {
  const notes =
    accidental === 'sharp'
      ? CYCLE_OF_FIFTHS
      : CYCLE_OF_FIFTHS.map(adjustEnharmonic);
  return (
    <Box
      sx={{
        position: 'relative',
        maxWidth: '85vw',
        maxHeight: '85vw',
        height: '300px',
        width: '300px',
        paddingTop: '100px',
      }}
    >
      {notes.map((note, idx) => (
        <Box
          key={note}
          sx={{
            width: '100%',
            minWidth: '100%',
            height: '100%',
            position: 'absolute',
            transform: `rotate(${30 * (idx - 3)}deg)`,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Box sx={{ width: '50%' }} />
          <Box
            sx={{ display: 'flex', width: '50%', flexDirection: 'row-reverse' }}
          >
            <Box
              sx={{
                maxWidth: '30px',
                minWidth: '30px',
                transform: `rotate(${-30 * (idx - 3)}deg)`,
                fontSize: '1.4rem',
              }}
            >
              {note}
            </Box>
            <Divider />
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default Cycle;
