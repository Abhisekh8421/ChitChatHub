import { AttachFile, Send } from "@mui/icons-material";
import { IconButton, Stack } from "@mui/material";
import React, { useRef } from "react";
import { InputBox } from "../components/styles/StyledComponents";
import Applayout from "../components/layout/Applayout";
import FileMenu from "../components/dialogs/FileMenu";
import { sampleMessage } from "../components/constants/Sampledata";
import Messagecomponent from "../components/shared/Messagecomponent";

const user = {
  _id: "sddsddsf",
  name: "Abhisekhsuru",
};

const Chat = () => {
  const containerRef = useRef(null);

  return (
    <>
      <Stack
        ref={containerRef}
        boxSizing={"border-box"}
        padding={"1rem"}
        spacing={"1rem"}
        bgcolor={"grey"}
        height={"90%"}
        sx={{
          overflowX: "hidden",
          overflowY: "auto",
        }}
      >
        {sampleMessage.map((message, index) => (
          <Messagecomponent key={index} message={message} user={user} />
        ))}
      </Stack>

      <form
        style={{
          height: "10%",
        }}
      >
        <Stack
          direction={"row"}
          height={"100%"}
          padding={"1rem"}
          alignItems={"center"}
          position={"relative"}
        >
          <IconButton
            sx={{
              position: "absolute",
              left: "1.5rem",
              rotate: "30deg",
            }}
          >
            <AttachFile />
          </IconButton>
          <InputBox placeholder="Type Message Here....." />
          <IconButton
            type="submit"
            sx={{
              backgroundColor: "#ea7070",
              rotate: "-28deg",
              color: "white",
              marginLeft: "1rem",
              padding: "0.5rem",
              transition: "transform 0.3s",
              "&:hover": {
                backgroundColor: "darkgrey",
              },
            }}
          >
            <Send
              sx={{
                transition: "transform 0.3s",
                "&:hover": {
                  transform: "translateX(5px)",
                },
              }}
            />
          </IconButton>
        </Stack>
      </form>
      <FileMenu />
    </>
  );
};

export default Applayout()(Chat);
