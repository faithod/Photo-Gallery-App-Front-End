import { IFavourites } from "../interfaces/IFavourites";
import { IGallery } from "../interfaces/IGallery";
import { IUser } from "../interfaces/IUser";

export interface DeleteButtonProps {
  setIsHovering: React.Dispatch<React.SetStateAction<boolean>>;
  user: IUser | undefined;
  image: IGallery | IFavourites;
  setFavourites: React.Dispatch<
    React.SetStateAction<IFavourites[] | undefined>
  >;
}
