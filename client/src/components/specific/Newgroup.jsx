import {
  Button,
  Dialog,
  DialogTitle,
  InputAdornment,
  List,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

import { sampleUsers } from "../constants/Sampledata";
import UserItem from "../shared/UserItem";
import { SearchRounded } from "@mui/icons-material";
import { useInputValidation } from "6pp";

const Newgroup = () => {
  const groupName = useInputValidation("");
  const [members, setmembers] = useState(sampleUsers);
  const [Selectedmembers, setSelectedmembers] = useState([]);
  const submitHandler = () => {};
  const selectMemberHandler = (id) => {
    setSelectedmembers((prev) =>
      prev.includes(id)
        ? prev.filter((current) => current !== id)
        : [...prev, id]
    );
  };
  console.log(Selectedmembers); //for checking purpose
  const closeHandler=()=>{
    
  }

  return (
    <Dialog open onClose={closeHandler}>
      <Stack p={{ xs: "1rem", sm: "3rem " }} width={"25rem"} spacing={"2rem"}>
        <DialogTitle textAlign={"center"} variant="h4">
          New Group
        </DialogTitle>
        <TextField
          variant="outlined"
          size="small"
          value={groupName.value}
          label="GroupName"
          onChange={groupName.changeHandler}
        />
        <Typography textAlign={"center"} margin={"0.4rem"} variant="body1">
          Members
        </Typography>
        <Stack>
          <List>
            {members.map((user, index) => (
              <UserItem
                user={user}
                key={user._id}
                handler={selectMemberHandler}
                // taking the user_id through this method
                isAdded={Selectedmembers.includes(user._id)}
              />
            ))}
          </List>
        </Stack>
        <Stack direction={"row"} justifyContent={"space-evenly"}>
          <Button variant="outlined" color="error" size="large">
            Cancel
          </Button>
          <Button variant="contained" size="large" onClick={submitHandler}>
            Create
          </Button>
        </Stack>
      </Stack>
    </Dialog>
  );
};

export default Newgroup;
