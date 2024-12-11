import React, { useState, useEffect } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { trackerTitle, calendar, date, userBox, user } from "./Styles";
import { Typography, Box, TextField, Button, Container } from "@mui/material";
import dayjs from "dayjs";

// Mock data for demonstration
const data = {
    "2024-12-08": {
        caloriesTaken: 2000,
        caloriesBurned: 500,
        exerciseTime: "30 minutes",
        foodItems: ["Eggs", "Salad", "Chicken"],
    },
    "2024-12-07": {
        caloriesTaken: 1800,
        caloriesBurned: 400,
        exerciseTime: "20 minutes",
        foodItems: ["Pasta", "Fruits", "Milk"],
    },
    "2024-12-06": {
        caloriesTaken: 2000,
        caloriesBurned: 800,
        exerciseTime: "55 minutes",
        foodItems: ["Eggs", "Salad", "Chicken",  "Milk"],
    },
    "2024-12-05": {
        caloriesTaken: 1500,
        caloriesBurned: 400,
        exerciseTime: "20 minutes",
        foodItems: ["Pasta", "Fruits", "Milk"],
    },
    "2024-12-04": {
        caloriesTaken: 2303,
        caloriesBurned: 630,
        exerciseTime: "40 minutes",
        foodItems: ["Eggs", "Fruits", "Chicken"],
    },
    "2024-12-03": {
        caloriesTaken: 2600,
        caloriesBurned: 1000,
        exerciseTime: "80 minutes",
        foodItems: ["Pasta", "Fruits", "Milk", "Eggs", "Fruits", "Chicken"],
    },
    "2024-12-02": {
        caloriesTaken: 2000,
        caloriesBurned: 500,
        exerciseTime: "30 minutes",
        foodItems: ["Eggs", "Salad", "Chicken"],
    },
    "2024-12-01": {
        caloriesTaken: 1800,
        caloriesBurned: 400,
        exerciseTime: "20 minutes",
        foodItems: ["Pasta", "Fruits", "Milk"],
    },
};

function DailyTracker() {
    const [selectedDate, setSelectedDate] = useState(null);
    const [details, setDetails] = useState(null);
    const [foodItem, setFoodItem] = useState("");
    const [calories, setCalories] = useState("");
    const [caloriesTaken, setCaloriesTaken] = useState(0);

    const handleDateChange = (newValue) => {
        const formattedDate = newValue.format("YYYY-MM-DD");
        setSelectedDate(formattedDate); // Format the date to match the keys in the mock data
        setDetails(data[formattedDate] || null); // Fetch details or set null if not found
    };

    const handleAddFoodItem = () => {
        if (foodItem && calories) {
            const newDetails = {
                ...details,
                foodItems: [...(details.foodItems || []), foodItem],
                caloriesTaken: details.caloriesTaken + parseInt(calories),
            };
            setDetails(newDetails); // Update details with new food item and calories
            setFoodItem(""); // Reset food item input
            setCalories(""); // Reset calories input
            setCaloriesTaken(newDetails.caloriesTaken); // Update total calories
        }
    };

    useEffect(() => {
        if (selectedDate === dayjs().format("YYYY-MM-DD")) {
            setFoodItem("");
            setCalories("");
        }
    }, [selectedDate]);

    return (
        <Container>
            <Typography variant="h3" sx={trackerTitle}>
                Track Daily with Nutri-Diet
            </Typography>

            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
                <Box sx={{ flex: 1, minWidth: 300 }}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DateCalendar
                            sx={calendar}
                            onChange={handleDateChange}
                        />
                    </LocalizationProvider>
                </Box>

                <Box sx={userBox}>
                    {selectedDate && (
                        <Box>
                            <Typography variant="h6" sx={date}>Date: {selectedDate}</Typography>

                            {details ? (
                                <Box>
                                    <Typography variant="body1" sx={user}>Calories Taken: {details.caloriesTaken}</Typography>

                                    <Typography variant="body1" sx={user}>Calories Burned: {details.caloriesBurned}</Typography>

                                    <Typography variant="body1" sx={user}>Exercise Time: {details.exerciseTime}</Typography>
                                    <Box sx={{ mb: 2 }}>
                                        <Typography variant="body1">Food Items:</Typography>
                                        <ul>
                                            {details.foodItems.map((item, index) => (
                                                <li key={index}>{item}</li>
                                            ))}
                                        </ul>
                                    </Box>

                                    {selectedDate === dayjs().format("YYYY-MM-DD") && (
                                        <Box>
                                            <TextField
                                                label="Food Item"
                                                value={foodItem}
                                                onChange={(e) => setFoodItem(e.target.value)}
                                                fullWidth
                                            />
                                            <TextField
                                                label="Calories"
                                                value={calories}
                                                onChange={(e) => setCalories(e.target.value)}
                                                fullWidth
                                                type="number"
                                                sx={{ mt: 2 }}
                                            />
                                            <Button
                                                variant="contained"
                                                sx={{ mt: 2 }}
                                                onClick={handleAddFoodItem}
                                            >
                                                Add Food Item
                                            </Button>
                                        </Box>
                                    )}
                                </Box>
                            ) : (
                                <Typography color="error" sx={{fontSize : 23}}>Data Not Found !! </Typography>
                            )}
                        </Box>
                    )}
                </Box>
            </Box>
        </Container>
    );
}

export default DailyTracker;
