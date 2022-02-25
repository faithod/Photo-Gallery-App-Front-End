import { IFavourites } from "../interfaces/IFavourites";
import { IUser } from "../interfaces/IUser";

export interface MyFavouritesProps {
  favourites: IFavourites[] | undefined;
  setFavourites: React.Dispatch<
    React.SetStateAction<IFavourites[] | undefined>
  >;
  user: IUser | undefined;
}
