import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import AccountMenu from "./AccountMenu";
import { IUser } from "../interfaces/IUser";
import { LoginProps } from "../interfaces/LoginProps";

export default function Login(props: LoginProps): JSX.Element {
  const getUserById = (usersArr: IUser[] | undefined, id: number) => {
    return usersArr?.filter((user) => user.id === id)[0];
  };
  console.log(props.user);

  return (
    <>
      {props.user ? (
        <AccountMenu
          allUsers={props.allUsers}
          user={props.user}
          setUser={props.setUser}
        />
      ) : (
        <div className="login">
          <FormControl sx={{ m: 1, minWidth: 150 }}>
            <InputLabel id="select-label">Login</InputLabel>
            <Select
              labelId="select-label"
              id="log-in"
              label="please select a name"
              onChange={(e) =>
                props.setUser(
                  getUserById(props.allUsers, Number(e.target.value))
                )
              }
            >
              <MenuItem value="">
                <em>please select a name</em>
              </MenuItem>
              {props.allUsers?.map((el: IUser) => (
                <MenuItem key={el.id} value={el.id}>
                  {el.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
      )}
    </>
  );
}
