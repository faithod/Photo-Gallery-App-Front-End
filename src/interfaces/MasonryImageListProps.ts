import { IFavourites } from "../interfaces/IFavourites";
import { IGallery } from "../interfaces/IGallery";
import { IUser } from "../interfaces/IUser";

export interface MasonryImageListProps {
  gallery: IGallery[] | IFavourites[] | undefined;
  user: IUser | undefined;
  setFavourites: React.Dispatch<
    React.SetStateAction<IFavourites[] | undefined>
  >;
}
