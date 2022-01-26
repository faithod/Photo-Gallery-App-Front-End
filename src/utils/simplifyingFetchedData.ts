import { IFetchedData } from "../interfaces/IFetchedData";
import { IGallery } from "../interfaces/IGallery";

export default function simplifyingFetchedData(data: IFetchedData): IGallery[] {
  const simplerGalleryData = [];
  for (const element of data.photos) {
    simplerGalleryData.push({
      id: element.id,
      alt: element.alt,
      url: element.src.portrait,
    });
  }
  return simplerGalleryData;
}
