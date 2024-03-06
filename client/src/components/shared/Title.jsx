import React from "react";
import { Helmet } from "react-helmet-async";

const Title = ({
  title = "chatapp",
  description = "this is the chatting application",
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta content={description} name="description" />
    </Helmet>
  );
};

export default Title;
