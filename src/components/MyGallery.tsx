import { IUser } from "../interfaces/IUser";
import { IUserGallery } from "../interfaces/IUserGallery";

export default function MyGallery(props: {
  userGallery: IUserGallery | undefined;
  user: IUser | undefined;
}): JSX.Element {
  return (
    <>
      {props.user ? "" : "please log in to view"}{" "}
      {/*change this to conditionally render the gallery or 'upload an image now!' or sutten */}
    </>
  );
}
