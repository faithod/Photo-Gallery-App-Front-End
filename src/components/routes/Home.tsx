import { IUser } from "../../interfaces/IUser";
import PageHeader from "../PageHeader";
import PhotoGallery from "../PhotoGallery";
export default function Home(props: {
  allUsers: IUser[] | undefined;
  user: IUser | undefined;
  setUser: React.Dispatch<React.SetStateAction<IUser | undefined>>;
}): JSX.Element {
  return (
    <>
      <PageHeader
        allUsers={props.allUsers}
        user={props.user}
        setUser={props.setUser}
      />
      <h1>Photo Gallery App</h1>
      <PhotoGallery />
    </>
  );
}
