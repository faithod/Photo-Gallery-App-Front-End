import { IFavourites } from "../interfaces/IFavourites";
import { IUser } from "../interfaces/IUser";
import MasonryImageList from "./MasonryImageList";

export default function MyFavourites(props: {
  favourites: IFavourites[] | undefined;
  setFavourites: React.Dispatch<
    React.SetStateAction<IFavourites[] | undefined>
  >;
  user: IUser | undefined;
}): JSX.Element {
  return (
    <>
      {props.user ? (
        <MasonryImageList
          user={props.user}
          gallery={props.favourites}
          setFavourites={props.setFavourites}
        />
      ) : (
        "please log in to view"
      )}
    </>
  );
}
