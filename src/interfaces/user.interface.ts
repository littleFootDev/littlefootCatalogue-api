import mongoose from 'mongoose';

export interface IUser extends mongoose.Document{
    speudo: string;
    password: string;
    email: string;
    roles: string;
}