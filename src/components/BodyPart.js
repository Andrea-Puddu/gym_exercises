import {Stack, Typography} from '@mui/material';

import Icon from '../assets/icons/gym.png';
import {BorderTop} from '@mui/icons-material';

const BodyPart = ({item, bodyPart, setBodyPart, setCurrentPage}) => {
  return (
    <Stack
      type='button'
      alignItems='center'
      justifyContent='center'
      className='bodyPart-card'
      sx={{
        borderTop: bodyPart === item ? '4px solid #FF2625' : '',
        background: '#fff',
        borderBottomLeftRadius: '20px',
        width: '270px',
        height: '282px',
        cursor: 'pointer',
        gap: '47px',
      }}
      onClick={() => {
        setBodyPart(item);
        setCurrentPage(1);
        window.scrollTo({top: 1800, left: 100, behavior: 'smooth'});
      }}
    >
      <img src={Icon} alt='dumbbell' style={{width: '40px', height: '40px'}} />
      <Typography fontSize='24px' fontWeight='bold' color='#3a1212' textTransform='capitalize'>
        {item}
      </Typography>
    </Stack>
  );
};

export default BodyPart;
