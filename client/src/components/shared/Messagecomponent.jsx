import { Box, Typography } from "@mui/material";
import moment from "moment";
import React, { memo } from "react";
import { Fileformat } from "../../lib/features";

const Messagecomponent = ({ message, user }) => {
  const { sender, content, attachments = [], createdAt } = message;
  const sameSender = sender?._id === user?._id;
  const timeago = moment(createdAt).fromNow();
  return (
    <div
      style={{
        alignSelf: sameSender ? "flex-end" : "flex-start",
        backgroundColor: "white",
        color: "black",
        borderRadius: "5px",
        padding: "0.5rem",
        width: "fit-content",
      }}
    >
      {!sameSender && (
        <Typography color={"#2694ab"} fontWeight={"600"} variant="caption">
          {sender.name}
        </Typography>
      )}
      {sameSender && (
        <Typography color={"#2694ab"} fontWeight={"600"} variant="caption">
          You
        </Typography>
      )}
      {content && <Typography>{content}</Typography>}

      {/* attachment render */}
      {attachments.length > 0 &&
        attachments.map((attachment, index) => {
          const url = attachment.url;
          const file = Fileformat(url);
          return (
            <Box key={index}>
              <a
                href=""
                download
                target="_blank"
                style={{
                  color: "black",
                }}
              ></a>
            </Box>
          );
        })}
      <Typography variant="caption" color={"text.secondary"}>
        {timeago}
      </Typography>
    </div>
  );
};

export default memo(Messagecomponent);
