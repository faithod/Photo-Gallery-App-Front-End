//fetches data from back-end using baseUrl
import { IFavourites } from "../interfaces/IFavourites";
import { IUser } from "../interfaces/IUser";
import { baseUrl } from "../utils/baseUrl";

export default function fetchData(
  endpoint: string,
  setState:
    | React.Dispatch<React.SetStateAction<IFavourites[] | undefined>>
    | React.Dispatch<React.SetStateAction<IUser[] | undefined>>
): void {
  fetch(baseUrl + endpoint).then((res) =>
    res.json().then((data) => {
      setState(data.data);
    })
  );
}
