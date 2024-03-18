import { Dialog, DialogTitle, Stack, Typography } from "@mui/material";
import React from "react";
import { sampleNotifications } from "../constants/Sampledata";

const Newgroup = () => {
  return (
    <Dialog open>
      <Stack p={{ xs: "1rem", sm: "2rem " }} maxWidth={"25rem"}>
        <DialogTitle textAlign={"center"}>Notifications</DialogTitle>
        {sampleNotifications.length > 0 ? (
          sampleNotifications.map(({ sender, _id }) => (
            <NotificationItem
              sender={sender}
              _id={_id}
              handler={friendRequestHandler}
              key={_id}
            />
          ))
        ) : (
          <Typography textAlign={"center"}>No Notifications</Typography>
        )}
      </Stack>
    </Dialog>
  );
};

export default Newgroup;
