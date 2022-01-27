import { IUser } from "../../interfaces/IUser";
import PageHeader from "../PageHeader";
import Profile from "../Profile";
//come back to props etc.
export default function UsersProfile(props: {
  allUsers: IUser[] | undefined;
  user: IUser | undefined;
  setUser: React.Dispatch<React.SetStateAction<IUser | undefined>>;
}): JSX.Element {
  return (
    <>
      <PageHeader
        allUsers={props.allUsers}
        user={props.user}
        setUser={props.setUser}
      />
      <h1>{props.user ? props.user.name : "My"} Profile</h1>{" "}
      {/*use their name */}
      <Profile
        allUsers={props.allUsers}
        user={props.user}
        setUser={props.setUser}
      />
    </>
  );
}
