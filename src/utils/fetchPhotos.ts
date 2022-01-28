//fetches data from external API 
import simplifyingFetchedData from "../utils/simplifyingFetchedData";
import { IGallery } from "../interfaces/IGallery";

export default function fetchPhotos(
  setState: React.Dispatch<React.SetStateAction<IGallery[]>>,
  search: string
): void {
  const query = `interior+design+${search}`;
  // const apiAccessKey = process.env.REACT_APP_API_ACCESS_KEY;
  
  fetch(`https://api.pexels.com/v1/search?per_page=1000&query=${query}`, {
    headers: {
      Authorization: "563492ad6f91700001000001aa1757fa15d04b3b8ed2b8c1958a7869", //hide this key
    },
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
