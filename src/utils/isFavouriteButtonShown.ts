import { IUser } from "../interfaces/IUser";

export function isFavouriteButtonShown(
  isHovering: boolean,
  location: import("/home/2110-003-fod/Developer/academy/Photo-Gallery-App-Front-End/node_modules/history/index").Location,
  user: IUser | undefined
): boolean {
  if (isHovering && location.pathname === "/") {
    return user ? true : false;
  } else {
    return false;
  }
}
