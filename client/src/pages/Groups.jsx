import { KeyboardBackspace, Menu } from "@mui/icons-material";
import { Box, Drawer, Grid, IconButton, Tooltip } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Groups = () => {
  const [IsMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const navigateBlack = () => {
    navigate("/");
  };
  const handlemobile = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };
  const handlemobileclose = () => {
    setIsMobileMenuOpen(false);
  };
  const Iconbtns = (
    <>
      <Box
        sx={{
          display: {
            xs: "block",
            position: "fixed",
            right: "1rem",
            top: "1rem",
          },
        }}
      >
        <Tooltip title="menu">
          <IconButton onClick={handlemobile}>
            <Menu />
          </IconButton>
        </Tooltip>
      </Box>
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
      <Drawer open={IsMobileMenuOpen} onClose={handlemobileclose}></Drawer>
      {/* //when true the dialog will open then onclose it will shut down */}
    </Grid>
  );
};

export default Groups;
