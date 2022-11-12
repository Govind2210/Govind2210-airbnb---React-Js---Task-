import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Headers from 'components/Headers';
import OptionTab from 'components/OptionTab';
import Container from '@mui/material/Container';
import LocationCards from 'components/LocationCards';
import React from 'react';
import SecoundSlider from 'components/SecoundSlider';
import './App.css';


function App() {
  return (
    <React.Fragment>
      <CssBaseline/>
      <Box sx={{
        display : 'flex',
        flexDirection : 'column',
        height : 'auto'
      }}>
        <Box>
          <Headers/>
          <OptionTab/>  
          <Container maxWidth='xl' sx={{ mb : 3}}>
            <LocationCards/>
          </Container>
        </Box>
      </Box>
      <SecoundSlider/>
    </React.Fragment>
  );
}

export default App;
