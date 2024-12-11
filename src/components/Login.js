import React, { useState } from "react";
import axios from "axios";
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import {
    Button, Input, SignInContainer, SignUpContainer, Form, Container, Title, Anchor,
    Overlay, OverlayContainer, LeftOverlayPanel, Paragraph, GhostButton, RightOverlayPanel
} from "./Components";
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();
    const [signIn, toggle] = useState(true);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        age: "",
        gender: "",
    });

    const [alert, setAlert] = useState({
        open: false,
        type: "success",
        message: "",
    });

    const handleCloseAlert = () => {
        setAlert((prev) => ({ ...prev, open: false }));
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://nutri-diet-server-production.up.railway.app/api/users/login", {
                email: formData.email,
                password: formData.password,
            });

            if (response.status === 200) {
                setAlert({ open: true, type: "success", message: "Login successful!" });
                setTimeout(() => navigate("/dashboard"), 2000);
            } else {
                setAlert({ open: true, type: "error", message: "Invalid login credentials." });
            }
        } catch (error) {
            const errorMessage = error.response?.data?.message || error.message;
            setAlert({ open: true, type: "error", message: `Login failed: ${errorMessage}` });
        }
    };

    const handleSignUp = async () => {
        try {
            const response = await axios.post("http://nutri-diet-server-production.up.railway.app/api/users/register", formData);
            if (response.status === 200 || response.status === 201) {
                setAlert({ open: true, type: "success", message: "Registration successful!" });
                toggle(true);
            } else {
                setAlert({ open: true, type: "error", message: `Unexpected response: ${response.statusText}` });
            }
        } catch (error) {
            setAlert({
                open: true,
                type: "error",
                message: `Registration failed: ${error.response?.data?.message || error.message}`,
            });
        }
    };

    return (
        <Container>
            <SignUpContainer signingIn={signIn}>
                <Form>
                    <Title>Create Account</Title>
                    <Input name="name" type="text" placeholder="Name" onChange={handleChange} required />
                    <Input name="email" type="email" placeholder="Email" onChange={handleChange} required />
                    <Input name="password" type="password" placeholder="Password" onChange={handleChange} required />
                    <Input name="age" type="number" placeholder="Age" onChange={handleChange} required />
                    <select name="gender" onChange={handleChange} required>
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                    </select>
                    <Button onClick={handleSignUp}>Sign Up</Button>
                </Form>
            </SignUpContainer>
            <SignInContainer signingIn={signIn}>
                <Form onSubmit={handleLogin}>
                    <Title>Login</Title>
                    <Input name="email" type="email" placeholder="Email" onChange={handleChange} />
                    <Input name="password" type="password" placeholder="Password" onChange={handleChange} />
                    <Anchor href="#">Forgot your password?</Anchor>
                    <Button onClick={handleLogin}>Login</Button>
                </Form>
            </SignInContainer>
            <OverlayContainer signingIn={signIn}>
                <Overlay signingIn={signIn}>
                    <LeftOverlayPanel signingIn={signIn}>
                        <Title>Welcome Back!</Title>
                        <Paragraph>Make a day count with us!</Paragraph>
                        <GhostButton onClick={() => toggle(true)}>Log In</GhostButton>
                    </LeftOverlayPanel>
                    <RightOverlayPanel signingIn={signIn}>
                        <Title>New here?</Title>
                        <Paragraph>Enter your personal details and start your journey with us</Paragraph>
                        <GhostButton onClick={() => toggle(false)}>Sign Up</GhostButton>
                    </RightOverlayPanel>
                </Overlay>
            </OverlayContainer>
            <Snackbar
                open={alert.open}
                autoHideDuration={3000}
                onClose={handleCloseAlert}
                anchorOrigin={{ vertical: "top", horizontal: "center" }}
            >
                <Alert onClose={handleCloseAlert} severity={alert.type}>
                    {alert.message}
                </Alert>
            </Snackbar>
        </Container>
    );
}

export default Login;
