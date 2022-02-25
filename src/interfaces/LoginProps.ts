import { IUser } from "../interfaces/IUser";

export interface LoginProps {
    allUsers: IUser[] | undefined;
    user: IUser | undefined;
    setUser: React.Dispatch<React.SetStateAction<IUser | undefined>>;
}