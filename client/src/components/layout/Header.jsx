import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import React from "react";
import { orange } from "../constants/color";
import MenuIcon from "@mui/icons-material/Menu";
import { SearchSharp } from "@mui/icons-material";
import AddIcon from "@mui/icons-material/Add";
import GroupIcon from "@mui/icons-material/Group";
import { useNavigate } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";

const Header = () => {
  const navigate = useNavigate();
  const handleMobile = () => {
    console.log("mobile");
  };
  const openSearch = () => {
    console.log("mobile");
  };
  const OpenNewGroup = () => {
    console.log("mobile");
  };
  const LogoutHandler = () => {
    console.log("mobile");
  };
  const NavigateGroup = () => navigate("/groups");
  return (
    <Box sx={{ flexGrow: 1 }} height={"4rem"}>
      <AppBar
        position="static"
        sx={{
          bgcolor: "#344955",
        }}
      >
        <Toolbar>
          <Typography
            variant="h4"
            sx={{
              display: { xs: "none", sm: "block" },
            }}
          >
            Chat App
          </Typography>
          <Box
            sx={{
              display: { xs: "block", sm: "none" },
            }}
          >
            <IconButton color="inherit" onClick={handleMobile}>
              <MenuIcon />
            </IconButton>
          </Box>
          <Box sx={{ flexGrow: 1 }} />
          <Box>
            <IconBtn
              title={"Search"}
              icon={<SearchSharp />}
              onClick={openSearch}
            />
            <IconBtn
              title={"New Group"}
              icon={<AddIcon />}
              onClick={OpenNewGroup}
            />
            <IconBtn
              title={"Manage Group"}
              icon={<GroupIcon />}
              onClick={NavigateGroup}
            />
            <IconBtn
              title={"Logout"}
              icon={<LogoutIcon />}
              onClick={LogoutHandler}
            />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

const IconBtn = ({ title, icon, onClick }) => {
  return (
    <Tooltip title={title}>
      <IconButton color="inherit" size="large" onClick={onClick}>
        {icon}
      </IconButton>
    </Tooltip>
  );
};

export default Header;
