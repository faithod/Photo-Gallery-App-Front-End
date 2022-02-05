export function isDeleteButtonShown(isHovering: boolean, location: import("/home/2110-003-fod/Developer/academy/Photo-Gallery-App-Front-End/node_modules/history/index").Location): boolean {
    if (isHovering && location.pathname === "/profile") {
      return true;
    } else {
      return false;
    }
  }