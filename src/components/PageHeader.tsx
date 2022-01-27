import { IUser } from "../interfaces/IUser";
import Login from "./Login";

export default function PageHeader(props: {
  allUsers: IUser[] | undefined;
  user: IUser | undefined;
  setUser: React.Dispatch<React.SetStateAction<IUser | undefined>>;
}): JSX.Element {
  return (
    <>
      <Login
        allUsers={props.allUsers}
        user={props.user}
        setUser={props.setUser}
      />
    </>
  );
}
