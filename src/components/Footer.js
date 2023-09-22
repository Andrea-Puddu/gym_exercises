import {Box, Stack, Typography} from '@mui/material';
import Logo from '../assets/images/Logo-1.png';

const Footer = () => (
  <Box mt='80px' bgcolor='#FFF3F4' p='38px'>
    <Stack gap='40px' sx={{alignItems: 'center'}}>
      <img src={Logo} alt='logo' style={{width: '200px', height: '41px'}} />
      <Typography sx={{fontSize: {lg: '18px', xs: '12px'}}} textAlign='center'>
        Build by <span style={{fontWeight: 'bold'}}>DDU</span> © 2023 JS Mastery
      </Typography>
    </Stack>
  </Box>
);

export default Footer;
