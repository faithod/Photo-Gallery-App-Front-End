import { IUser }from '../interfaces/IUser'
import { Location } from "react-router-dom";

  export function isFavouriteButtonShown(isHovering: boolean, location: Location, user: IUser | undefined): boolean {
    if (isHovering && location.pathname === "/") {
        return user ? true : false;
    } else {
      return false;
    }
  }