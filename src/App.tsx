import { Box, Typography } from '@mui/material';
import CertificateGenerator from './components/CertificateGenerator';

function App() {
  return (
    <>
      <Box
        component='header'
        sx={{ paddingBlock: 6, textAlign: 'center', fontSize: 24 }}
      >
        <Typography variant='h1'>Certificate Generator</Typography>
      </Box>
      <Box
        component='main'
        sx={{
          display: 'flex',
          justifyContent: 'center',
          paddingBlockEnd: 6,
        }}
      >
        <CertificateGenerator />
      </Box>
    </>
  );
}

export default App;
