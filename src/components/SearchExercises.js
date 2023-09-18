import {useState} from 'react';
import {Stack, Box, Typography, TextField, Button} from '@mui/material';

import {exerciseOptions, fetchData} from '../utils/fetchData';

const SearchExercises = () => {
  const [search, setSearch] = useState('');
  const [exercises, setExercises] = useState([]);

  const handleSearch = async () => {
    if (search) {
      const exercisesData = await fetchData(
        'https://exercisedb.p.rapidapi.com/exercises',
        exerciseOptions
      );

      const searchedExercises = exercisesData.filter(
        (item) =>
          item.name.toLowerCase().includes(search) ||
          item.target.toLowerCase().includes(search) ||
          item.equipment.toLowerCase().includes(search) ||
          item.bodyPart.toLowerCase().includes(search)
      );

      setSearch('');
      setExercises(searchedExercises);

      console.log(searchedExercises);
    }
  };

  return (
    <Stack alignItems='center' justifyContent='center' mt='37px' p='20px'>
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
            setSearch(e.target.value.toLowerCase);
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
    </Stack>
  );
};

export default SearchExercises;
