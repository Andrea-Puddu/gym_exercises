import {useState, useEffect} from 'react';
import {Stack, Box, Typography, TextField, Button} from '@mui/material';
import HorizontalScrollbar from './HorizontalScrollbar';

import {exerciseOptions, fetchData} from '../utils/fetchData';

const SearchExercises = ({setExercises, bodyPart, setBodyPart, setCurrentPage}) => {
  const [search, setSearch] = useState('');
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData(
        'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
        exerciseOptions
      );

      setBodyParts(['all', ...bodyPartsData]);
    };

    fetchExercisesData();
  }, []);

  const handleSearch = async () => {
    if (search) {
      // data = [{}, {}, {}, {}, {}]
      const exercisesData = await fetchData(
        'https://exercisedb.p.rapidapi.com/exercises',
        exerciseOptions
      );

      // console.log(exercisesData);

      // Search functionality
      const searchedExercises = exercisesData.filter(
        (exercise) =>
          exercise.name.toLowerCase().includes(search) ||
          exercise.bodyPart.toLowerCase().includes(search) ||
          exercise.equipment.toLowerCase().includes(search) ||
          exercise.target.toLowerCase().includes(search)
      );

      // console.log(searchedExercises);

      setSearch('');
      setExercises(searchedExercises);
      window.scrollTo({top: 1800, left: 100, behavior: 'smooth'});
    }
  };

  return (
    <Stack id='search-exercises' alignItems='center' justifyContent='center' mt='37px' p='20px'>
      <Typography
        fontWeight={700}
        mb='50px'
        textAlign='center'
        sx={{fontSize: {xs: '30px', lg: '44px'}}}
      >
        Awesome Exercises You <br /> Should Know
      </Typography>

      <Box position='relative' mb='72px'>
        <TextField
          type='text'
          placeholder='Search Exercises'
          value={search}
          onChange={(e) => {
            setSearch(e.target.value.toLowerCase());
          }}
          height='76px'
          sx={{
            input: {fontWeight: '700', border: 'none', borderRadius: '4px'},
            width: {xs: '350px', lg: '800px'},
            backgroundColor: '#fff',
            borderRadius: '40px',
          }}
        />
        <Button
          className='search-btn'
          sx={{
            backgroundColor: '#ff2625',
            color: '#fff',
            textTransform: 'none',
            width: {xs: '80px', lg: '173px'},
            fontSize: {xs: '14px', lg: '20px'},
            height: '56px',
            position: 'absolute',
            right: 0,
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>

      <Box sx={{position: 'relative ', width: '100%', p: '20px'}}>
        <HorizontalScrollbar
          data={bodyParts}
          bodyPart={bodyPart}
          setBodyPart={setBodyPart}
          setCurrentPage={setCurrentPage}
          isBodyParts
        />
      </Box>
    </Stack>
  );
};

export default SearchExercises;
