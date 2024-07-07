"use client";
import React, { useState } from "react";
import { Rating } from "@mui/material";
import Box from "@mui/material/Box";

const StarRating = () => {
  const [rating, setRating] = useState(0);

  const handleRatingChange = (event, newValue) => {
    setRating(newValue);
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      sx={{ fontSize: "2rem" }}
    >
      <Box component="fieldset" borderColor="transparent">
        <Rating
          size="large"
          name="half-rating"
          value={rating}
          precision={0.5}
          onChange={handleRatingChange}
        />
      </Box>
      <Box mt={2}>
        <h4 id="rating-value">{rating} out of 5</h4>
      </Box>
    </Box>
  );
};

export default StarRating;
