import { useEffect } from "react";
import { IFavourites } from "../interfaces/IFavourites";
import fetchData from "../utils/fetchData";
import MasonryImageList from "./MasonryImageList";

export default function MyFavourites(props: {
  favourites: IFavourites[] | undefined;
  setFavourites: React.Dispatch<
    React.SetStateAction<IFavourites[] | undefined>
  >;
}): JSX.Element {
  useEffect(() => {
    fetchData("/favourites", props.setFavourites);
  }, []);

  return (
    <>
      {/* {props.favourites?.map((el) => (
        <img key={el.id} src={el.url} alt={el.alt} width={600}></img>
      ))} */}
      <MasonryImageList gallery={props.favourites} />
    </>
  );
}
