//private page - a user should not see this component until they have successfully logged in
import { useState } from "react";
import { IUser } from "../../interfaces/IUser";
import Login from "../LoginPage";
import PageHeader from "../PageHeader";
import Profile from "../Profile";
//come back to props etc.
export default function UsersProfile(props: {
  allUsers: IUser[] | undefined;
  user: IUser | undefined;
  setUser: React.Dispatch<React.SetStateAction<IUser | undefined>>;
}): JSX.Element {
  //using token-based authentication
  //the token will be fetched from the back end & stored in a state
  const [token, setToken] = useState();
  if (!token) {
    //this login component will display until you set a token
    return <Login setToken={setToken} />;
  }

  return (
    <>
      <PageHeader
        allUsers={props.allUsers}
        user={props.user}
        setUser={props.setUser}
      />
      <h1>{props.user ? props.user.name + "'s" : "My"} Profile</h1>{" "}
      <Profile
        allUsers={props.allUsers}
        user={props.user}
        setUser={props.setUser}
      />
    </>
  );
}
