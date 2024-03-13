import React from "react";
import Header from "./Header";
import Title from "../shared/Title";
import { Grid } from "@mui/material";
import Chatlist from "../specific/Chatlist";
import { sampleChats } from "../constants/Sampledata";
import { useParams } from "react-router-dom";
import Profile from "../specific/Profile";

const Applayout = () => (Wrappedcomponent) => {
  return (props) => {
    const params = useParams();
    const chatId = params.chatId;
    const handleDeleteChat = (e, _id, groupChat) => {
      e.preventDefault();
      console.log("Delete chat", _id, groupChat);
    };
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
              chatId={chatId}
              handleDeleteChat={handleDeleteChat}
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
              backgroundColor: "black",
            }}
            height={"100%"}
          >
            <Profile />
          </Grid>
        </Grid>
      </>
    );
  };
};

export default Applayout;
