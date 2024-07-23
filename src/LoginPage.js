import React, { useState, useEffect } from "react";
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  Link,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import axios from "axios";
import { useAuth } from "./AuthContext";
import "./App.css";

const LoginPage = () => {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const { login } = useAuth();
  const [email, setEmail] = useState(localStorage.getItem("email") || "");
  const [password, setPassword] = useState(
    localStorage.getItem("password") || ""
  );
  const navigate = useNavigate();

  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = (event) => event.preventDefault();

  const handleRegisterRedirect = () => navigate("/register");
  const handleForgotPassword = () => navigate("/forgot-password");

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };
  useEffect(() => {
    // Retrieve stored email and password from localStorage
    const storedEmail = localStorage.getItem("email");
    const storedPassword = localStorage.getItem("password");
    if (storedEmail) setEmail(storedEmail);
    if (storedPassword) setPassword(storedPassword);
  }, []);
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Check if any field is empty
    if (!email || !password) {
      toast.error("Please fill out all required fields.");
      return;
    }

    if (!validateEmail(email)) {
      toast.error("Invalid email address");
      setEmailError("Invalid email address");
      return;
    }

    // Here you can choose either handleLogin or handleFetchUsersLogin
    await handleFetchUsersLogin(event); // or await handleFetchUsersLogin(event);
  };

  // const handleLogin = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await axios.post("http://localhost:5000/login", {
  //       email,
  //       password,
  //     });
  //     setMessage(response.data.message);
  //     setError("");
  //     toast.success(response.data.message);
  //     handleFetchUsersLogin();
  //     navigate("/landingpage");
  //   } catch (err) {
  //     setError(err.response?.data?.message || "Login failed");
  //     setMessage("");
  //     toast.error(err.response?.data?.message || "Login failed");
  //   }
  // };

  // Function to fetch users and handle login
  const handleFetchUsersLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/users");
      const users = await response.json();

      const user = users.find(
        (user) => user.email === email && user.password === password
      );

      if (user) {
        login(user); // Save user data to context
        toast.success("Login successful");
        navigate("/landingpage");
      } else {
        setError("Invalid email or password");
        toast.error("Invalid email or password");
      }
    } catch (error) {
      console.error("Error sending request:", error);
      setError("An error occurred. Please try again later.");
      toast.error("An error occurred. Please try again later.");
    }
  };
  const handleInputChange = (setter) => (e) => {
    setter(e.target.value);
    localStorage.setItem(e.target.name, e.target.value);
  };
  return (
    <Container maxWidth="xs">
      <Box mt={8} display="flex" flexDirection="column" alignItems="center">
        <Typography variant="h4" gutterBottom>
          Login
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            value={email}
            fullWidth
            label="Email Address"
            name="email"
            onChange={
              ((e) => setEmail(e.target.value), handleInputChange(setEmail))
            }
            autoComplete="email"
            autoFocus
            error={!!emailError}
            helperText={emailError}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            onChange={
              ((e) => setPassword(e.target.value),
              handleInputChange(setPassword))
            }
            name="password"
            label="Password"
            value={password}
            type={showPassword ? "text" : "password"}
            autoComplete="current-password"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <Button type="submit" fullWidth variant="contained" color="primary">
            Sign In
          </Button>
          <Box
            mt={2}
            display="flex"
            justifyContent="space-between"
            width="100%"
          >
            <Link
              component="button"
              variant="body2"
              onClick={handleForgotPassword}
            >
              Forgot password?
            </Link>
            <Link
              component="button"
              variant="body2"
              onClick={handleRegisterRedirect}
            >
              {"Don't have an account? Sign Up"}
            </Link>
          </Box>
        </form>
        <ToastContainer />
      </Box>
    </Container>
  );
};

export default LoginPage;
