import React from "react";
import { Box, Typography, LinearProgress } from "@mui/material";

function BMIScale({ bmi }) {
  const maxBMI = 30; // Max BMI for this scale
  const normalizedBMI = Math.min((bmi / maxBMI) * 100, 100); // Normalize BMI for the scale

  // Determine the color based on BMI category
  let barColor = '#4caf50'; // Green for healthy weight
  if (bmi >= 25 && bmi < 30) {
    barColor = '#ffeb3b'; // Yellow for overweight
  } else if (bmi >= 30) {
    barColor = '#f44336'; // Red for obesity
  }

  return (
    <Box sx={{ width: '100%', padding: '20px', textAlign: 'center' }}>
      <Typography variant="h5" gutterBottom>
        Your BMI: {bmi.toFixed(1)} (Scale: 0 to 30)
      </Typography>
      <Box sx={{ margin: '20px 0', position: 'relative' }}>
        {/* Progress Bar */}
        <LinearProgress
          variant="determinate"
          value={normalizedBMI}
          sx={{
            height: '15px',
            borderRadius: '10px',
            backgroundColor: '#e0e0e0',
            '& .MuiLinearProgress-bar': {
              backgroundColor: barColor,
            },
          }}
        />
        {/* Category Annotations */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '5px' }}>
          <Typography variant="body2" color="textSecondary">
            Underweight
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Healthy
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Overweight
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Obesity
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default BMIScale;
