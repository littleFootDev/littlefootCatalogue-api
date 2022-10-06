import mongoose from 'mongoose';

export interface IPost extends mongoose.Document {
    title: string;
    description: string;
    ibnNumber: number;
    relaseDate: Date;
    author: {name: string, lastName: string} 
};