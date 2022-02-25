import { useEffect } from "react";
import { UsersProfileProps } from "../../interfaces/UsersProfileProps";
import PageHeader from "../PageHeader";
import Profile from "../Profile";

export default function UsersProfile(props: UsersProfileProps): JSX.Element {
  useEffect(() => {
    document.title = "Profile";
  }, []);
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
        favourites={props.favourites}
        setFavourites={props.setFavourites}
      />
    </>
  );
}
