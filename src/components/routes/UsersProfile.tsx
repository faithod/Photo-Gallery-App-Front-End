import { useEffect } from "react";
import { IFavourites } from "../../interfaces/IFavourites";
import { IUser } from "../../interfaces/IUser";
import PageHeader from "../PageHeader";
import Profile from "../Profile";
//come back to props etc.
export default function UsersProfile(props: {
  allUsers: IUser[] | undefined;
  user: IUser | undefined;
  setUser: React.Dispatch<React.SetStateAction<IUser | undefined>>;
  favourites: IFavourites[] | undefined;
  setFavourites: React.Dispatch<
    React.SetStateAction<IFavourites[] | undefined>
  >;
}): JSX.Element {
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
