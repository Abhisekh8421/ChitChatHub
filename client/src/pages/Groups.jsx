import { KeyboardBackspace } from "@mui/icons-material";
import { Grid, IconButton, Tooltip } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const Groups = () => {
  const navigate = useNavigate();
  const navigateBlack = () => {
    navigate("/");
  };
  const Iconbtns = (
    <>
      <Tooltip title="back">
        <IconButton
          sx={{
            position: "absolute",
            top: "2rem",
            left: "2rem",
            bgcolor: "rgba(0,0,0,0.8)",
            color: "white",
            ":hover": {
              bgcolor: "#1c1c1c",
            },
          }}
          onClick={navigateBlack}
        >
          <KeyboardBackspace />
        </IconButton>
      </Tooltip>
    </>
  );
  return (
    <Grid container height={"100vh"}>
      <Grid
        item
        sm={4}
        sx={{
          display: {
            xs: "none",
            sm: "block",
          },
          bgcolor: "#D74B76",
        }}
      >
        Groups list
      </Grid>
      <Grid
        item
        sm={8}
        xs={12}
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          position: "relative",
          padding: "1rem 3rem",
        }}
      >
        {" "}
        {Iconbtns}
      </Grid>
    </Grid>
  );
};

export default Groups;
