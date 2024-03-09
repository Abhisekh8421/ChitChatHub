import {
  AppBar,
  Backdrop,
  Box,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { Suspense, lazy, useState } from "react";
import { orange } from "../constants/color";
import {
  Menu,
  SearchSharp,
  Add,
  Group,
  Logout,
  NotificationsActive,
} from "@mui/icons-material";

const SearchDialog = lazy(() => import("../specific/Search"));
const NotifiactionDialog = lazy(() => import("../specific/Notification"));
const Gropudialog = lazy(() => import("../specific/Newgroup"));
import { useNavigate } from "react-router-dom";
import { Layoutloader } from "./Loaders";

const Header = () => {
  const navigate = useNavigate();

  const [ismobile, setmobile] = useState(false);
  const [issearch, setsearch] = useState(false);
  const [isnewgroup, setnewgroup] = useState(false);
  const [isnotification, setnotification] = useState(false);

  const handleMobile = () => {
    setmobile((prev) => !prev);
  };
  const openSearch = () => {
    setsearch((prev) => !prev);
  };
  const OpenNewGroup = () => {
    setnewgroup((prev) => !prev);
  };
  const LogoutHandler = () => {
    console.log("mobile");
  };
  const opennotification = () => {
    setnotification((prev) => !prev);
  };
  const NavigateGroup = () => navigate("/groups");
  return (
    <>
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
                <Menu />
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
                icon={<Add />}
                onClick={OpenNewGroup}
              />
              <IconBtn
                title={"Manage Group"}
                icon={<Group />}
                onClick={NavigateGroup}
              />
              <IconBtn
                title={"Notifications"}
                icon={<NotificationsActive />}
                onClick={opennotification}
              />
              <IconBtn
                title={"Logout"}
                icon={<Logout />}
                onClick={LogoutHandler}
              />
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
      {/* it will show below the header  */}
      {issearch && (
        <Suspense fallback={<Backdrop open />}>
          <SearchDialog />
        </Suspense>
      )}
      {isnotification && (
        <Suspense fallback={<Backdrop open />}>
          <NotifiactionDialog />
        </Suspense>
      )}
      {isnewgroup && (
        <Suspense fallback={<Backdrop open />}>
          <Gropudialog />
        </Suspense>
      )}
    </>
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
