import { Stack } from "@mui/material";
import React from "react";
import ChatItem from "../shared/ChatItem";

const Chatlist = ({
  w = "100%",
  chats = [],
  chatId,
  onlineUsers = [],
  newMessagesAlert = [
    {
      chatId: "",
      count: 0,
    },
  ],
  handleDeleteChat,
}) => {
  return (
    <Stack
      width={w}
      direction={"column"}
      overflow={"auto"}
      sx={{
        backgroundColor: "#D74B76",
        height: "100vh",
      }}
    >
      {chats.map((data, index) => {
        const { _id, name, groupChat, avatar, members } = data;
        const newMessageAlert = newMessagesAlert.find(
          ({ chatId }) => chatId === _id
        );
        const isOnline = members.some((member) => onlineUsers.includes(_id));
        {
          /* if any member in the members array is currently online. It does this by using the .some() method to iterate through each member in the members array. For each member, it checks if their _id is included in the onlineUsers array. If at least one member's _id is found in the onlineUsers array, the isOnline variable will be true; otherwise, it will be false */
        }
        return (
          <ChatItem
            newMessageAlert={newMessageAlert}
            isOnline={isOnline}
            avatar={avatar}
            name={name}
            _id={_id}
            key={_id}
            index={index}
            groupChat={groupChat}
            sameSender={chatId === _id}
            handleDeleteChat={handleDeleteChat}
          />
        );
      })}
    </Stack>
  );
};

export default Chatlist;
