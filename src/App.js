import React, { useState } from "react";
import { Box, TextField, Typography, Button } from "@mui/material";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import HowToRegOutlinedIcon from "@mui/icons-material/HowToRegOutlined";
import { app} from "./firebaseConfig";
import { getAuth,GoogleAuthProvider, signInWithPopup } from "firebase/auth";
export default function Auth() {
  let auth = getAuth();
  let googleProvider =new GoogleAuthProvider();
  const [isSignUp, setIsSignUp] = useState(false);
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: " ",
  });
  // console.log(isSignUp);
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
    signInWithPopup (auth, googleProvider)
    .then((response)=>{
         console.log(response.user);
    })
    .catch((error) => {
      alert(error.message);
    });
  };
  const resetState = (e) => {
    setIsSignUp(!isSignUp);
    setInputs({ name: "", email: "", password:"" });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Box
          display="flex"
          flexDirection={"column"}
          maxWidth={300}
          alignItems="center"
          justifyContent={"center"}
          margin="auto"
          marginTop={5}
          paddingTop={3}
          borderRadius={5}
          boxShadow={"5px 5px 10px #ccc"}
          sx={{
            ":hover": {
              boxShadow: "10px 10px 20px #ccc",
            },
          }}
        >
          <Typography
            variant="h4"
            color={"primary"}
            padding={2}
            textAlign="center"
          >
            {isSignUp ? "SignUp" : "Login"}
          </Typography>
          {isSignUp && (
            <TextField
              name="name"
              onChange={handleChange}
              value={inputs.name}
              margin="normal"
              type="text"
              variant="outlined"
              placeholder="name"
            />
          )}

          <TextField
            name="email"
            onChange={handleChange}
            value={inputs.email}
            margin="normal"
            type="email"
            variant="outlined"
            placeholder="Email"
          />

          <TextField
            name="password"
            onChange={handleChange}
            value={inputs.password}
            margin="normal"
            type="password"
            variant="outlined"
            placeholder="Password"
          />
          <Button
            endIcon={
              isSignUp ? <HowToRegOutlinedIcon /> : <LoginOutlinedIcon />
            }
            type="submit"
            sx={{ marginTop: 2, marginBottom: 4, borderRadius: 3 }}
            variant="contained"
          >
            {isSignUp ? "Sign Up" : "Login"}
          </Button>
          <Button
            endIcon={
              isSignUp ? <LoginOutlinedIcon /> : <HowToRegOutlinedIcon />
            }
            onClick={resetState}
            sx={{ marginBottom: 3, borderRadius: 3 }}
          >
            Change To {isSignUp ? "Login" : "Sign Up"}
          </Button>
        </Box>
      </form>
    </div>
  );
}
