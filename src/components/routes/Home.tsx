import { HomeProps } from "../../interfaces/HomeProps";
import PageHeader from "../PageHeader";
import PhotoGallery from "../PhotoGallery";

export default function Home(props: HomeProps): JSX.Element {
  return (
    <>
      <PageHeader
        allUsers={props.allUsers}
        user={props.user}
        setUser={props.setUser}
      />
      <h1>Photo Gallery App</h1>
      <PhotoGallery
        user={props.user}
        favourites={props.favourites}
        setFavourites={props.setFavourites}
      />
    </>
  );
}
