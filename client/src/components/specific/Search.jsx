import {
  Dialog,
  DialogTitle,
  InputAdornment,
  List,
  Stack,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { useInputValidation } from "6pp";
import { SearchRounded } from "@mui/icons-material";
import UserItem from "../shared/UserItem";
import { sampleUsers } from "../constants/Sampledata";

const Search = () => {
  const search = useInputValidation("");
  const addFriendHandler = (id) => {
    console.log(id);
  };
  let isLoadingSendFriendRequest = false;
  const [users, setusers] = useState(sampleUsers);

  return (
    <Dialog open>
      <Stack p={"2rem"} direction={"column"} width={"25rem"}>
        <DialogTitle textAlign={"center"}>Find People</DialogTitle>
        <TextField
          label=""
          value={search.value}
          onChange={search.changeHandler}
          variant="outlined"
          size="small"
          InputProps={{
            startAdornment: (
              <InputAdornment>
                <SearchRounded />
              </InputAdornment>
            ),
          }}
        />

        <List>
          {users.map((user, index) => (
            <UserItem
              user={user}
              key={user._id}
              handler={addFriendHandler}
              // taking the user_id through this method
              handlerIsLoading={isLoadingSendFriendRequest}
            />
          ))}
        </List>
      </Stack>
    </Dialog>
  );
};

export default Search;
