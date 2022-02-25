import { IUser } from "../interfaces/IUser";
import IUserGallery from "../interfaces/IUserGallery";

export interface MyGalleryProps {
    userGallery: IUserGallery | undefined;
    user: IUser | undefined;
  }