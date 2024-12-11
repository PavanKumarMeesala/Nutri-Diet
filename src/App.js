import './App.css';
import Greet from './components/Greet.js';
import Login from './components/Login.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard.js';
import BMI from './components/BMI.js';
import DailyTracker from './components/DailyTracker.js';
function App() {
    return (
        <Router>
            <div className='Main'>
                <Routes>
                    <Route 
                        path="/" 
                        element={
                            <div className='main-page'>
                                <div className='greet-section'>
                                    <Greet />
                                </div>
                                <div className="box">
                                    <Login />
                                </div>
                            </div>
                        } 
                    /> 
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/bmi" element={<BMI />} />
                    <Route path="/track" element={<DailyTracker />} />    
                </Routes>
            </div>
        </Router>
    );
}

export default App;
