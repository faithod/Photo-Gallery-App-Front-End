//fetches data from external API
import simplifyingFetchedData from "../utils/simplifyingFetchedData";
import { IGallery } from "../interfaces/IGallery";

export default function fetchPhotos(
  setState: React.Dispatch<React.SetStateAction<IGallery[]>>,
  search: string
): void {
  const query = `interior+design+${search}`;
  const apiAccessKey: HeadersInit | undefined | string = process.env.REACT_APP_API_ACCESS_KEY;

  fetch(`https://api.pexels.com/v1/search?per_page=1000&query=${query}`, {
    headers: {
      Authorization: apiAccessKey ? apiAccessKey : ""
    }
  })
    .then((resp) => {
      return resp.json();
    })
    .then((data) => {
      console.log(data);
      const simplerData = simplifyingFetchedData(data);
      setState(simplerData);
    });
}
