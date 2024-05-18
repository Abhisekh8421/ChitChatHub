import { Grid } from "@mui/material";
import React from "react";

const Sidebar = () => {
  return <div> Sidebar</div>;
};

const AdminLayout = ({ children }) => {
  return (
    <Grid container minHeight={"100vh"}>
      <Grid
        item
        md={4}
        lg={3}
        sx={{
          display: {
            xs: "none",
            md: "block",
          },
        }}
      >
        <Sidebar />
      </Grid>
      <Grid
        item
        xs={12}
        md={8}
        lg={9}
        sx={{
          bgcolor: "#f5f5f5",
        }}
      >
        {children}
      </Grid>
    </Grid>
  );
};

export default AdminLayout;
