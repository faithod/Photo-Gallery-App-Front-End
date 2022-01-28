import { useEffect } from "react";
import { IFavourites } from "../interfaces/IFavourites";
import { IUser } from "../interfaces/IUser";
import fetchData from "../utils/fetchData";
import MasonryImageList from "./MasonryImageList";

export default function MyFavourites(props: {
  favourites: IFavourites[] | undefined;
  setFavourites: React.Dispatch<
    React.SetStateAction<IFavourites[] | undefined>
  >;
  user: IUser | undefined;
}): JSX.Element {
  useEffect(() => {
    fetchData("/favourites", props.setFavourites);
  }, [props.setFavourites]);

  return (
    <>
      {/* {props.favourites?.map((el) => (
        <img key={el.id} src={el.url} alt={el.alt} width={600}></img>
      ))} */}
      {props.user ? (
        <MasonryImageList gallery={props.favourites} />
      ) : (
        "please log in to view"
      )}
    </>
  );
}
