import React, { useState } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";
import "./BMI.css";
import { title, box, convert, titleConvert, label1 } from "./Styles";
import BMIDescription from "./BMIDescription";

const convertToCm = (feet, inches) => {
  const totalInches = feet * 30.48 + inches * 2.54;
  return totalInches;
};


  
function BMI() {
    const calculateBMI = () => {
        if (!weight || !height) {
          alert("Please enter both weight and height!");
          return;
        }
      
        const heightInMeters = height / 100; // Convert height from cm to meters
        const calculatedBmi = (weight / (heightInMeters * heightInMeters)).toFixed(2); // Calculate BMI
      
        setBmi(calculatedBmi); // Update the BMI state
        calculateCalories(weight); // Call calculateCalories to update the calorie values
      };
      
      const calculateCalories = (currentWeight) => {
        const maintenanceCalories = currentWeight * 24 * 1.2; 
        const loseWeightCalories = maintenanceCalories - 500; 
        const gainWeightCalories = maintenanceCalories + 500; 
      
        setCalories({
          maintenance: maintenanceCalories.toFixed(0),
          loss: loseWeightCalories.toFixed(0),
          gain: gainWeightCalories.toFixed(0),
        });
      };

  const [calories, setCalories] = useState(null); 
  const [feet, setFeet] = useState("");
  const [inches, setInches] = useState("");
  const [cmResult, setCmResult] = useState(null);
  const [height, setHeightCm] = useState("");
  const [weight, setWeightKg] = useState("");
  const [bmi, setBmi] = useState(null);

  const handleConvert = () => {
    const cm = convertToCm(feet, inches);
    setCmResult(parseFloat(cm.toFixed(2)));
  };

  return (
    <div>
      <BMIDescription />
      <Box sx={{ display: "flex", gap: 20 }}>
        <Typography variant="h3" sx={title}>
          BMI Calculator
        </Typography>
        <Typography variant="h3" sx={titleConvert}>
          Feet to centimeter
        </Typography>
      </Box>

      <Box sx={{ display: "flex", gap: 20 }}>
        <Box className="paper" sx={box}>
          <TextField
            id="outlined-basic"
            label="Height (cm)"
            variant="outlined"
            className="input"
            type="number"
            value={height}
            onChange={(e) => setHeightCm(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="Weight (kg)"
            variant="outlined"
            className="input"
            type="number"
            value={weight}
            onChange={(e) => setWeightKg(e.target.value)}
          />
          <Button variant="contained" className="input" onClick={calculateBMI}>
            Calculate
          </Button>
        </Box>

        <Box className="paper" sx={convert}>
          <TextField
            id="outlined-basic"
            label="Feet"
            variant="outlined"
            className="input"
            type="number"
            value={feet}
            onChange={(e) => setFeet(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="Inches"
            variant="outlined"
            className="input"
            type="number"
            value={inches}
            onChange={(e) => setInches(e.target.value)}
          />
          <Button variant="contained" className="input" onClick={handleConvert}>
            Convert to CM
          </Button>
          <Typography sx={label1}>Result : {cmResult} cm</Typography>
        </Box>

        <Box sx={{ marginTop: "20px" }}>
          <Typography variant="h5" gutterBottom>
            Your BMI: {bmi}
          </Typography>
          <Typography variant="body1">
            Calories to maintain weight: {calories?.maintenance} kcal/day
          </Typography>
          <Typography variant="body1">
            Calories to lose weight: {calories?.loss} kcal/day
          </Typography>
          <Typography variant="body1">
            Calories to gain weight: {calories?.gain} kcal/day
          </Typography>
        </Box>
      </Box>
    </div>
  );
}

export default BMI;
