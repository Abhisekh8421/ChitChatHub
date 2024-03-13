import {
  Face as FaceIcon,
  AlternateEmail as UsernameIcon,
  CalendarMonth as calandarIcon,
} from "@mui/icons-material";
import { Avatar, Stack, Typography } from "@mui/material";
import React from "react";

const Profile = () => {
  return (
    <Stack direction={"column"} spacing={"2rem"} alignItems={"center"}>
      <Avatar
        sx={{
          width: 200,
          height: 200,
          objectFit: "contain",
          marginBottom: "1rem",
          border: "5px solid white",
        }}
      />
      <ProfileCard
        text={"Abhisekh"}
        heading={"Hello Everyone"}
        Icon={<FaceIcon />}
      />
      <ProfileCard
        text={"Abhisekh"}
        heading={"Hello Everyone"}
        Icon={<UsernameIcon />}
      />
      <ProfileCard
        text={"Abhisekh"}
        heading={"Hello Everyone"}
        Icon={<calandarIcon />}
      />
    </Stack>
  );
};

const ProfileCard = ({ text, Icon, heading }) => (
  <Stack
    direction={"row"}
    alignItems={"center"}
    spacing={"1rem"}
    color={"white"}
    textAlign={"center"}
  >
    {Icon && Icon}
    <Stack>
      <Typography color={"white"} variant="body1">
        {text}
      </Typography>
      <Typography color={"gray"} variant="caption">
        {heading}
      </Typography>
    </Stack>
  </Stack>
);

export default Profile;
