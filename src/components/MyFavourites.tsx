import { useEffect } from "react";
import { IFavourites } from "../interfaces/IFavourites";
import { baseUrl } from "../utils/baseUrl";

export default function MyFavourites(props: {
  favourites: IFavourites[] | undefined;
  setFavourites: React.Dispatch<
    React.SetStateAction<IFavourites[] | undefined>
  >;
}): JSX.Element {
  const fetchFavourites = () => {
    fetch(baseUrl + "favourites").then((res) =>
      res.json().then((jsonBody) => props.setFavourites(jsonBody.data))
    );
  };

  useEffect(() => {
    fetchFavourites();
  }, []);

  return (
    <>
      {props.favourites?.map((el) => (
        <img key={el.id} src={el.url} alt={el.alt} width={600}></img>
      ))}
    </>
  );
}
