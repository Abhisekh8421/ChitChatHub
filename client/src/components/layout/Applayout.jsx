import React from "react";
import Header from "./Header";
import Title from "../shared/Title";
import { Grid } from "@mui/material";
import Chatlist from "../specific/Chatlist";
import { sampleChats } from "../constants/Sampledata";

const Applayout = () => (Wrappedcomponent) => {
  return (props) => {
    return (
      <>
        <Title />
        <Header />
        <Grid container height={"calc(100vh-4rem)"}>
          <Grid
            item
            sm={4}
            md={3}
            sx={{
              display: { xs: "none", sm: "block" },
            }}
            height={"100%"}
          >
            <Chatlist
              chats={sampleChats}
              chatId={"1"}
              newMessagesAlert={[{ chatId: "1", count: 6 }]}
              onlineUsers={["1", "2","3"]}
            />
          </Grid>
          <Grid item xs={12} sm={8} md={5} lg={6} height={"100%"}>
            <Wrappedcomponent {...props} />
          </Grid>
          <Grid
            item
            md={4}
            lg={3}
            sx={{
              display: { xs: "none", md: "block" },
            }}
            height={"100%"}
          >
            profile section
          </Grid>
        </Grid>
      </>
    );
  };
};

export default Applayout;
