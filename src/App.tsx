import { Box, Typography } from '@mui/material';

function App() {
  return (
    <Box
      component='main'
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      }}
    >
      <Typography variant='h1'>Hello World</Typography>
    </Box>
  );
}

export default App;
