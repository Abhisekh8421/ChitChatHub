import {
  Face as FaceIcon,
  AlternateEmail as UsernameIcon,
  CalendarMonth as CalendarIcon,
} from "@mui/icons-material";
import { Avatar, Stack, Typography } from "@mui/material";
import React from "react";
import moment from "moment";

const Profile = () => {
  return (
    <Stack
      direction={"column"}
      spacing={"2rem"}
      alignItems={"center"}
      height={"100vh"}
    >
      <Avatar
        sx={{
          width: 200,
          height: 200,
          objectFit: "contain",
          marginBottom: "1rem",
          border: "5px solid white",
        }}
        src="https://picsum.photos/seed/picsum/200/300"
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
        text={"joined"}
        heading={moment("2024-02-23T00:00:00.000Z").fromNow()}
        Icon={<CalendarIcon />}
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
