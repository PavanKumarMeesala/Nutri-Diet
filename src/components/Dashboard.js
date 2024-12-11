import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Card,
  CardContent,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Drawer,
} from '@mui/material';
import {
  Dashboard as DashboardIcon,
  Settings,
  Notifications,
  AccountCircle,
  Menu,
} from '@mui/icons-material';
import './Dashboard.css';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navigate = useNavigate();
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <Box className="dashboard-container">
      <Drawer
        variant="temporary"
        open={sidebarOpen}
        onClose={toggleSidebar}
        className="sidebar"
        sx={{
          '& .MuiDrawer-paper': {
            width: 240,
            backgroundColor: '#1976d2',
            color: 'white',
          },
        }}
      >
        <Box className="sidebar">
          <Typography variant="h6" className="sidebar-title" gutterBottom>
            Menu
          </Typography>
          <List>
            <ListItem button onClick={() => navigate("/bmi")} >
              <ListItemIcon>
                <DashboardIcon className="nav-list-item-icon" />
              </ListItemIcon>
              <ListItemText primary="BMI" />
            </ListItem>
            <ListItem button onClick={() => navigate("/track")}>
              <ListItemIcon>
                <Settings className="nav-list-item-icon" />
              </ListItemIcon>
              <ListItemText primary="Track Daily" />
            </ListItem>
          </List>
        </Box>
      </Drawer>

      <Box className="main-content">
        <AppBar position="static" color="default" className="app-bar">
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleSidebar}>
              <Menu />
            </IconButton>
            <Typography variant="h5" color="inherit" sx={{ flexGrow: 1 }}>
              Nutri-Diet: Enchance Living with Nutrition.
            </Typography>
            <IconButton color="inherit">
              <Notifications />
            </IconButton>
            <IconButton color="inherit">
              <AccountCircle />
            </IconButton>
          </Toolbar>
        </AppBar>

        <Box>
          <Typography variant="h2" className="dashboard-title" gutterBottom>
            Welcome to Dashboard
          </Typography>
          <Typography variant="h5" className="subtitle" gutterBottom>
            Here is an overview of your activities and metrics.
          </Typography>

          <Box className="card-container">
            <Card className="dashboard-card">
              <CardContent>
                <Typography variant="h5">Current burning Calories</Typography>
                <Typography color="text.secondary">1,200/ per day</Typography>
              </CardContent>
            </Card>
            <Card className="dashboard-card">
              <CardContent>
                <Typography variant="h5">Target to achieve</Typography>
                <Typography color="text.secondary">3500 cal/ per day </Typography>
              </CardContent>
            </Card>
            <Card className="dashboard-card">
              <CardContent>
                <Typography variant="h5">Active Sessions</Typography>
                <Typography color="text.secondary">45 active days</Typography>
              </CardContent>
            </Card>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Dashboard;
