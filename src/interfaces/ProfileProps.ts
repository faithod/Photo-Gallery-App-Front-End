import { IUser } from "../interfaces/IUser";
import { IFavourites } from "../interfaces/IFavourites";

export interface ProfileProps {
    allUsers: IUser[] | undefined;
    user: IUser | undefined;
    setUser: React.Dispatch<React.SetStateAction<IUser | undefined>>;
    favourites: IFavourites[] | undefined;
    setFavourites: React.Dispatch<
      React.SetStateAction<IFavourites[] | undefined>
    >;
  }