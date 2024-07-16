import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { ExerciseOptions, fetchData } from "../utils/fetchData";

const SearchExercises = () => {
  const [search,setSearch] = useState('')
  const [exercises,setExercises] = useState([])
  const [bodyParts, setBodyParts] = useState([])


  useEffect(() => {
    const fetchBodyParts = async () => {
      const bodyPartsData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        ExerciseOptions
      );

      setBodyParts(['all', ...bodyPartsData])
    }

    fetchBodyParts()
  },[])

  const handleSearch = async () => {
    if (search) {
      const ExercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', ExerciseOptions)

      const SearchedExercises = ExercisesData.filter((exercise) => {
        exercise.bodyPart.toLowerCase().includes(search) ||
        exercise.equipment.toLowerCase().includes(search) ||
        exercise.name.toLowerCase().includes(search) ||
        exercise.target.toLowerCase().includes(search)
      })
      setExercises(SearchedExercises)
      setSearch('')
    }
  }

  return (
    <Stack justifyContent="center" alignItems="center" mt="37px" p="20px">
      <Typography
        fontWeight="700"
        sx={{ fontSize: { lg: "44px", xs: "30px" } }}
        textAlign="center"
        mb="50px"
      >
        Awesome Exercises You Should Know
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          height="76px"
          type="text"
          placeholder="Search Exercises"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          sx={{
            input: { fontWeight: "700", border: "none", borderRadius: "4px" },
            width: { lg: "800px", xs: "350px" },
          }}
        />
        <Button
          sx={{
            height: "56px",
            position: "absolute",
            width: { lg: "175px", xs: "80px" },
            fontSize: { lg: "20px", xs: "14px" },
            right: 0,
            color: "#fff",
            bgcolor: "#ff2625",
            textTransform: "none",
          }}
          variant="contained"
          color="error"
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
    </Stack>
  );
};

export default SearchExercises;
