import React, { useState } from "react";
import { Button, Container, Paper, TextField, Typography } from "@mui/material";

const Login = () => {
  const [isLogin, setisLogin] = useState(true);
  const ToggleLogin = () => setisLogin(false);
  return (
    <Container
      component={"main"}
      maxWidth="xs"
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          padding: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {isLogin ? (
          <>
            <Typography variant="h4">Login</Typography>
            <form
              style={{
                width: "100%",
                marginTop: "1rem",
              }}
            >
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                label="username"
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                label="password"
                type="password"
              />
              <Button
                sx={{
                  marginTop: "1rem",
                }}
                variant="contained"
                color="primary"
                type="submit"
                fullWidth
              >
                Login
              </Button>
              <Typography textAlign={"center"} m={"1rem"}>
                OR
              </Typography>
              <Button
                variant="text"
                type="submit"
                onClick={ToggleLogin}
                fullWidth
              >
                SignUp Instead
              </Button>
            </form>
          </>
        ) : (
          <span> Register</span>
        )}
      </Paper>
    </Container>
  );
};

export default Login;
