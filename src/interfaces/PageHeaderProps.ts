import { IUser } from "../interfaces/IUser";

export interface PageHeaderProps {
  allUsers: IUser[] | undefined;
  user: IUser | undefined;
  setUser: React.Dispatch<React.SetStateAction<IUser | undefined>>;
}
