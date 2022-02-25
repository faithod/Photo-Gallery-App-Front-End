import { MyFavouritesProps } from "../interfaces/MyFavouritesProps";
import MasonryImageList from "./MasonryImageList";

export default function MyFavourites(props: MyFavouritesProps): JSX.Element {
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
