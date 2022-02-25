import { IUser } from "../interfaces/IUser";
import { IFavourites } from "../interfaces/IFavourites";

export interface PhotoGalleryProps {
    user: IUser | undefined;
    favourites: IFavourites[] | undefined;
    setFavourites: React.Dispatch<
      React.SetStateAction<IFavourites[] | undefined>
    >;
  }