import { Location } from "react-router-dom";

export function isDeleteButtonShown(
  isHovering: boolean,
  location: Location
): boolean {
  if (isHovering && location.pathname === "/profile") {
    return true;
  } else {
    return false;
  }
}
