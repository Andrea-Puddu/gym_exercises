import {Stack, Box, Typography} from '@mui/material';
import HorizontalScrollbar from './HorizontalScrollbar';
import Loader from './Loader';

const SimiliarExercises = ({targetMuscleExercises, equipmentExercises}) => {
  return (
    <Box sx={{mt: {xs: '0', lg: '100px'}}}>
      <Typography variant='h3' mb='40px'>
        Exercises that target the same muscle group
      </Typography>
      <Stack direction='row' sx={{p: '2', position: 'relative', mb: '80px'}}>
        {targetMuscleExercises.length ? (
          <HorizontalScrollbar data={targetMuscleExercises} />
        ) : (
          <Loader />
        )}
      </Stack>

      <Typography variant='h3' mb='40px'>
        Exercises that use the same equipment
      </Typography>
      <Stack direction='row' sx={{p: '2', position: 'relative'}}>
        {equipmentExercises.length ? (
          <HorizontalScrollbar data={targetMuscleExercises} />
        ) : (
          <Loader />
        )}
      </Stack>
    </Box>
  );
};

export default SimiliarExercises;
