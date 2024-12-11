import React from 'react';
import { Typography, Paper } from '@mui/material';
import { ThemeProvider } from '@mui/system'; // To apply the custom theme

import { createTheme } from '@mui/material/styles';
import { blue } from '@mui/material/colors';

// Create a theme with custom blue palette
const theme = createTheme({
  palette: {
    primary: {
      light: blue[300],
      main: blue[500],
      dark: blue[700],
      darker: blue[900],
    },
  },
});
const BMIDescription = () => {
  return (
    <ThemeProvider theme={theme}> {/* Wrap with ThemeProvider to apply the theme */}
      <Paper sx={{ padding: '20px', margin: '20px' }}>
        <Typography variant="h4" color="primary" sx={{ marginBottom: '10px' }}>
          What is BMI?
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: '20px' }}>
          BMI stands for Body Mass Index, is a simple method to assess if a person has a healthy body weight
          relative to their height. It is calculated by dividing a person's weight in kilograms by the
          square of their height in meters. This result is used to categorize individuals into different
          groups: underweight, normal weight, overweight, and obese.
        </Typography>
        
        <Typography variant="h5" color="primary" sx={{ marginBottom: '10px' }}>
          Benefits of BMI:
        </Typography>
        <Typography variant="body1">
          1. **Health Assessment**: BMI is a quick and easy way to determine whether you are in a healthy weight range.
        </Typography>
        <Typography variant="body1">
          2. **Prevention of Health Risks**: Maintaining a healthy BMI reduces the risk of developing conditions such as
          heart disease, diabetes, and hypertension.
        </Typography>
        <Typography variant="body1">
          3. **Easy to Calculate**: Unlike other health assessments, BMI only requires your height and weight, making it
          accessible for everyone.
        </Typography>
        <Typography variant="body1">
          4. **Guides Lifestyle Changes**: Knowing your BMI can help you take action, such as adjusting your diet and exercise
          routine to achieve a healthier weight.
        </Typography>
      </Paper>
    </ThemeProvider>
  );
};

export default BMIDescription;
