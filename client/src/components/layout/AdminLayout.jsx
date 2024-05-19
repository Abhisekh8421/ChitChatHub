import {
  Box,
  Drawer,
  Grid,
  IconButton,
  Stack,
  Typography,
  styled,
} from "@mui/material";
import React, { useState } from "react";
import {
  Close,
  Dashboard,
  ExitToApp,
  Groups,
  ManageAccounts,
  Menu,
  Message,
} from "@mui/icons-material";
import { Link as LinkComponent, Navigate, useLocation } from "react-router-dom";
const Link = styled(LinkComponent)`
  text-decoration: none;
  border-radius: 2rem;
  padding: 1rem 2rem;
  color: black;
  &:hover {
    color: rgba(0, 0, 0, 0.54);
  }
`;

//tabs

const adminTabs = [
  {
    name: "Dashboard",
    path: "/admin/dashboard",
    icon: <Dashboard />,
  },
  {
    name: "Users",
    path: "/admin/users",
    icon: <ManageAccounts />,
  },
  {
    name: "Chats",
    path: "/admin/chats",
    icon: <Groups />,
  },
  {
    name: "Messages",
    path: "/admin/messages",
    icon: <Message />,
  },
];

const Sidebar = ({ w = "100%" }) => {
  const location = useLocation();
  const logoutHandler = () => {
    console.log("logout");
  };
  return (
    <Stack width={w} direction={"column"} p={"3rem"} spacing={"3rem"}>
      <Typography variant="h4" textTransform={"uppercase"} textAlign={"center"}>
        Admin
      </Typography>
      <Stack spacing={"1rem"}>
        {adminTabs.map((tab) => (
          <Link
            to={tab.path}
            key={tab.path}
            sx={
              location.pathname === tab.path && {
                bgcolor: "#28282B",
                color: "white",
                ":hover": { color: "white" },
              }
            }
          >
            <Stack direction={"row"} alignItems={"center"} spacing={"1rem"}>
              {tab.icon}
              <Typography fontSize={"1.2rem"} fontWeight={"550"} fontFamily={"sans-serif"}>
                {tab.name}
              </Typography>
            </Stack>
          </Link>
        ))}
        <Link onClick={logoutHandler}>
          <Stack direction={"row"} alignItems={"center"} spacing={"1rem"}>
            <ExitToApp />
            <Typography fontSize={"1.2rem"} fontWeight={"550"} fontFamily={"sans-serif"}>
              Logout
            </Typography>
          </Stack>
        </Link>
      </Stack>
    </Stack>
  );
};
const isAdmin = true;
const AdminLayout = ({ children }) => {
  const [isMobile, setIsmobile] = useState(false);
  const handleMobile = () => setIsmobile((prev) => !prev);
  const handleClose = () => setIsmobile(false);
  if (!isAdmin) return <Navigate to="/admin" />;
  return (
    <Grid container minHeight={"100vh"}>
      <Box
        sx={{
          display: { xs: "block", md: "none" },
          position: "fixed",
          right: "1rem",
          top: "1rem",
        }}
      >
        <IconButton onClick={handleMobile}>
          {isMobile ? <Close /> : <Menu />}
        </IconButton>
      </Box>
      {/* mainly this box will appear only if the screen size will be xs and not visible at md it is like a menu icon */}

      <Grid
        item
        md={4}
        lg={3}
        sx={{
          display: {
            xs: "none",
            md: "block",
          },
        }}
      >
        <Sidebar />
      </Grid>
      <Grid
        item
        xs={12}
        md={8}
        lg={9}
        sx={{
          bgcolor: "#f5f5f5",
        }}
      >
        {children}
      </Grid>
      <Drawer open={isMobile} onClose={handleClose}>
        <Sidebar w="50vw" />
      </Drawer>
    </Grid>
  );
};

export default AdminLayout;
