import React, { useState } from "react";
import {
  Avatar,
  Button,
  Container,
  IconButton,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useInputValidation } from "6pp";
import { Navigate } from "react-router-dom";

const isAdmin = false;

const AdminLogin = () => {
  const secretkey = useInputValidation("");

  const SubmitHandler = (e) => {
    e.preventDefault();
    console.log("Submit");
  };
  if (isAdmin) return <Navigate to={"/admin/dashboard"} />;
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
        <Typography variant="h4">Admin Login</Typography>
        <form
          style={{
            width: "100%",
            marginTop: "1rem",
          }}
          onSubmit={SubmitHandler}
        >
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="SecretKey"
            type="password"
            value={secretkey.value}
            onChange={secretkey.changeHandler}
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
        </form>
      </Paper>
    </Container>
  );
};

export default AdminLogin;
