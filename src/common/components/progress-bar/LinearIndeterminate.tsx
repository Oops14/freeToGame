import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

export default function LinearIndeterminate() {
  return (
    <Box sx={{ width: '100%', position: 'sticky', top: '90px', zIndex: '11000', marginTop: '-40px', marginBottom: '40px' }}>
      <LinearProgress sx={{  zIndex: '10000' }}/>
    </Box>
  );
}