import { Box, Typography } from '@mui/material';
import CertificateGenerator from './components/CertificateGenerator';

function App() {
  return (
    <>
      <Box
        component='header'
        sx={{ paddingBlock: 6, textAlign: 'center', fontSize: 24 }}
      >
        <Typography
          variant='h1'
          sx={{
            background:
              '-webkit-linear-gradient(45deg, #fdd649 30%, #FD642E 90%)',
            webkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            color: 'transparent',
            backgroundClip: 'text',
            textTransform: 'uppercase',
            animation: 'gradient 5s infinite alternate-reverse',

            backgroundSize: '300%',
            backgroundPosition: '-100%',
          }}
        >
          Certificate Generator
        </Typography>
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
