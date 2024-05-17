import { Button, Dialog, DialogTitle, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import { sampleUsers } from "../constants/Sampledata";
import UserItem from "../shared/UserItem";

const AddMemberDialog = ({ chatId, addMember, isLoadingAddMember }) => {
  const [members, setmembers] = useState(sampleUsers);
  const [Selectedmembers, setSelectedmembers] = useState([]);
  const selectMemberHandler = (id) => {
    setSelectedmembers((prev) =>
      prev.includes(id)
        ? prev.filter((current) => current !== id)
        : [...prev, id]
    );
  };

  const closeHandler = () => {
    setmembers([]);
    setSelectedmembers([]);
  };
  const addmemberSubmitHandler = () => {
    closeHandler();
  };
  return (
    <Dialog open onClose={closeHandler}>
      <Stack spacing={"2rem"} width={"20rem"} p={"2rem"}>
        <DialogTitle>Add Member</DialogTitle>
        <Stack spacing={"1rem"}>
          {members.length > 0 ? (
            members.map((user) => (
              <UserItem
                key={user._id}
                user={user}
                handler={selectMemberHandler}
                isAdded={Selectedmembers.includes(user._id)}
              />
            ))
          ) : (
            <Typography textAlign={"center"}>Nofriends....</Typography>
          )}
        </Stack>
        <Stack
          direction={"row"}
          justifyContent={"space-evenly"}
          alignItems={"center"}
        >
          <Button color="error" onClick={closeHandler}>
            Cancel{" "}
          </Button>
          <Button
            disabled={isLoadingAddMember}
            variant="contained"
            onClick={addmemberSubmitHandler}
          >
            Submit Changes
          </Button>
        </Stack>
      </Stack>
    </Dialog>
  );
};

export default AddMemberDialog;
