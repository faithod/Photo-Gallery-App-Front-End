import PageHeader from "../PageHeader";
import Profile from "../Profile";

export default function UsersProfile(): JSX.Element {
  return (
    <>
      <PageHeader title={"User's Profile"} /> {/*use their name */}
      <Profile />
    </>
  );
}
