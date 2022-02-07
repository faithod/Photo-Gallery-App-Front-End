import {IGallery} from '../interfaces/IGallery';
import {IFavourites} from '../interfaces/IFavourites';
import {IUser} from '../interfaces/IUser';

export const filterGallery = (
    user: IUser | undefined,
    photos: IGallery[],
    search: string,
    favourites: IFavourites[] | undefined
  ): IGallery[] => {
    const output = [];

    function isInFavourites(
      photo: IGallery,
      favourites: IFavourites[] | undefined
    ) {
      if (favourites) {
        for (const favourite of favourites) {
          if (favourite.photo_id === photo.id) {
            return true;
          }
        }
      }
      return false;
    }

    for (const photo of photos) {
      //if search term is incuded in the alt text of image
      if (photo.alt.toLowerCase().includes(search.toLowerCase())) {
        if (user) {
          //if image is not in users 'favourites' list
          if (!isInFavourites(photo, favourites)) {
            output.push(photo);
          }
        } else {
          output.push(photo);
        }
      }
    }
    return output;
  };