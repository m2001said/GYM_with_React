import React from "react";
import { Link } from "react-router-dom";
import { Button, Stack, Typography } from "@mui/material";
const ExerciseCard = ({ exercise }) => {
  return (
    <Link
      className="exercise-card"
      to={`/GYM_with_React/exercise/${exercise.id}`}
    >
      <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
      <Stack direction="row">
        <Button
          className="exercise-card-btn"
          sx={{
            ml: "21px",
            color: "#fff",
            background: "#ffa9a9",
            fontSize: "14px",
            borderRadius: "20px",
            textTransform: "capitalize",
            mt: "20px",
          }}
        >
          {exercise.bodyPart}
        </Button>
        <Button
          className="exercise-card-btn"
          sx={{
            ml: "21px",
            color: "#fff",
            background: "#fcc757",
            fontSize: "14px",
            borderRadius: "20px",
            textTransform: "capitalize",
            mt: "20px",
          }}
        >
          {exercise.target}
        </Button>
      </Stack>
      <Typography
        ml="21px"
        color="#000"
        fontSize="22px"
        fontWeight="bold"
        textTransform="capitalize"
        mt="11px"
        textAlign="center"
      >
        {exercise.name}
      </Typography>
    </Link>
  );
};

export default ExerciseCard;
