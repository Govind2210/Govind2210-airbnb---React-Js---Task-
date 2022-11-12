import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
// components
import Logo from './Logo';
import LocationSearch from './LoactionSearch';
import {
  flexBetweenCenter,
  dFlex,
  // displayOnDesktop,
} from 'themes/CommonStyle';
import ProfileSettings from './ProfilSettings';
import MobileSearch from './MobileSearch';

function Headers() {
  return (
    <Box
      sx={{
        ...dFlex,
        minHeight: 70,
        borderBottom: '1px solid #ddd',
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            ...flexBetweenCenter,
            minHeight: 90,
            px: 4,
          }}
        >
          <Box className='hidenow'>
            <Logo />
          </Box>
          <Box className='hidenow' >
            <LocationSearch />
          </Box>
          <Box className='hidenow'>
            <ProfileSettings />
          </Box>
          <Box className='seachingbox' sx={{ display: { xs: 'flex', md: 'none' } }}>
            <MobileSearch />
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Headers