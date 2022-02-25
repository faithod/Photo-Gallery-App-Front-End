import { MyGalleryProps } from "../interfaces/MyGalleryProps";

export default function MyGallery(props: MyGalleryProps): JSX.Element {
  return (
    <>
      {props.user ? "" : "please log in to view"}{" "}
      {/*change this to conditionally render the gallery or 'upload an image now!' or sutten */}
    </>
  );
}
