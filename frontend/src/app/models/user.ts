export interface IUser {
    password: string;
    firstName: string;
    lastName: string;
    email: string;
    gender: string;
    birthday: string;
    _id?: string;
    isAdmin?: boolean;
}
