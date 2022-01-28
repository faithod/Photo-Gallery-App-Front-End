//fetches data using baseUrl
import { IFavourites } from "../interfaces/IFavourites";
import { IUser } from "../interfaces/IUser";
import { baseUrl } from "../utils/baseUrl";

export default function fetchData(
  endpoint: string,
  setState:
    | React.Dispatch<React.SetStateAction<IFavourites[] | undefined>>
    | React.Dispatch<React.SetStateAction<IUser[] | undefined>>
) {
  fetch(baseUrl + endpoint).then((res) =>
    res.json().then((jsonBody) => {
      setState(jsonBody.data);
      console.log(jsonBody.data);
    })
  );
}
