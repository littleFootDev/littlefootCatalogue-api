import mongoose from 'mongoose';

export interface IUser extends mongoose.Document{
    pseudo: string;
    password: string;
    email: string;
    roles: string;

    comparePassword(password:string):Promise<boolean>;
}