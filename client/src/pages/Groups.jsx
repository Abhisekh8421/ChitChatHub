import { KeyboardBackspace, Menu } from "@mui/icons-material";
import {
  Box,
  Drawer,
  Grid,
  IconButton,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { memo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "../components/styles/StyledComponents";
import AvatarCard from "../components/shared/AvatarCard";
import { sampleChats } from "../components/constants/Sampledata";

const Groups = () => {
  const [IsMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const navigateBack = () => {
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
          onClick={navigateBack}
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
        <GroupList myGroups={sampleChats} />
        {/* //grouplist */}
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
      <Drawer
        sx={{
          display: {
            xs: "block",
            sm: "none",
          },
        }}
        open={IsMobileMenuOpen}
        onClose={handlemobileclose}
      >
        <GroupList w={"50vh"} myGroups={sampleChats} />
      </Drawer>
      {/* //when true the dialog will open then onclose it will shut down */}
    </Grid>
  );
};

const GroupList = ({ chatId, w = "100%", myGroups = [] }) => (
  <Stack>
    {myGroups.length > 0 ? (
      myGroups.map((group) => (
        <GroupListItem chatId={chatId} group={group} key={group._id} />
      ))
    ) : (
      <Typography textAlign={"center"} padding={"1rem"}>
        NoGroups
      </Typography>
    )}
  </Stack>
);

const GroupListItem = memo(({ group, chatId }) => {
  const { name, avatar, _id } = group;
  return (
    <Link
      to={`?group=${_id}`}
      onClick={(e) => {
        if (chatId == _id) e.preventDefault();
      }}
    >
      <Stack direction={"row"} spacing={"1rem"} alignItems={"center"}>
        <AvatarCard avatar={avatar} />
        <Typography>{name}</Typography>
      </Stack>
    </Link>
  );
});

export default Groups;
