import React from "react";

const RenderAttachment = ({ file, url }) => {
  switch (file) {
    case "video":
      <video src={url} controls preload="none" width={"200px"} />;
      break;
    case "image":
      <img src={url} alt="attachment"  />;
      break;
  }
};

export default RenderAttachment;
