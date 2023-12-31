import React from 'react';
import {Link} from 'react-router-dom';
import {Stack} from '@mui/material';
import Logo from '../assets/images/Logo.png';

const Navbar = () => {
  return (
    <Stack
      direction='row'
      justifyContent='start'
      px='20px'
      sx={{gap: {xs: '40px', sm: '122px'}, mt: {xs: '20px', sm: '32px'}}}
    >
      <Link to='/'>
        <img src={Logo} alt='logo' style={{width: '48px', height: '48px', margin: '0 20px'}} />
      </Link>

      <Stack direction='row' gap='40px' fontSize='24px' alignItems='end'>
        <Link
          to='/'
          style={{textDecoration: 'none', color: '#3a1212', borderBottom: '3px solid #ff2625'}}
        >
          Home
        </Link>

        <a href='#search-exercises' style={{textDecoration: 'none', color: '#3a1212'}}>
          Exercises
        </a>
      </Stack>
    </Stack>
  );
};

export default Navbar;
