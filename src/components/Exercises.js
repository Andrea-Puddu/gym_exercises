import {useState, useEffect} from 'react';
import Pagination from '@mui/material/Pagination';
import {Stack, Box, Typography} from '@mui/material';

import ExerciseCard from './ExerciseCard';
import {exerciseOptions, fetchData} from '../utils/fetchData';

const Exercises = ({exercises, setExercises, bodyPart, currentPage, setCurrentPage}) => {
  const exercisesPerPage = 9;

  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise);

  const paginate = (e, value) => {
    setCurrentPage(value);

    window.scrollTo({top: 1800, behavior: 'smooth'});
  };

  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];

      if (bodyPart === 'all') {
        exercisesData = await fetchData(
          'https://exercisedb.p.rapidapi.com/exercises',
          exerciseOptions
        );
      } else {
        exercisesData = await fetchData(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
          exerciseOptions
        );
      }

      setExercises(exercisesData);
    };

    fetchExercisesData();
  }, [bodyPart]);

  return (
    <Box id='exercises' p='20px' mt='50px' sx={{mt: {lg: '110px'}}}>
      <Typography variant='h3' mb='46px'>
        Showing Results
      </Typography>

      <Stack
        direction='row'
        flexWrap='wrap'
        justifyContent='center'
        sx={{gap: {xs: '50', lg: '110px'}}}
      >
        {currentExercises.map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise} />
        ))}
      </Stack>

      <Stack mt='100px' alignItems='center'>
        {exercises.length > 9 && (
          <Pagination
            shape='rounded'
            size='large'
            defaultPage={1}
            count={Math.ceil(exercises.length / exercisesPerPage)}
            page={currentPage}
            onChange={paginate}
          />
        )}
      </Stack>
    </Box>
  );
};

export default Exercises;
