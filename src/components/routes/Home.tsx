import PageHeader from "../PageHeader";
import PhotoGallery from "../PhotoGallery";
export default function Home(): JSX.Element {
  return (
    <>
      <PageHeader title={"Photo Gallery App"} />
      <PhotoGallery />
    </>
  );
}
