import { PageHeaderProps } from "../interfaces/PageHeaderProps";
import Login from "./Login";

export default function PageHeader(props: PageHeaderProps): JSX.Element {
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
