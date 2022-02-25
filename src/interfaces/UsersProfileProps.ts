import { IFavourites } from "./IFavourites";
import { IUser } from "./IUser";

export interface UsersProfileProps {
    allUsers: IUser[] | undefined;
    user: IUser | undefined;
    setUser: React.Dispatch<React.SetStateAction<IUser | undefined>>;
    favourites: IFavourites[] | undefined;
    setFavourites: React.Dispatch<
      React.SetStateAction<IFavourites[] | undefined>
    >;
  }