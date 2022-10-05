import mongoose from "mongoose";
import {hash} from 'bcryptjs'

import {IUser} from '../../interfaces/user.interface';

const userSchema:mongoose.Schema<IUser> = new mongoose.Schema({
    speudo : {
        type: String,
        required: true,
        minlenght: 6,
        maxlenght: 20,
        unique: true,
        trim: true,
    },
    password : {
        type: String,
        min: 6,
        max: 20,
        required: true,
    },
    email: {
        type : String,
        required: true,
        lowercase: true,
        trim: true
    },
    roles : {
        type: String,
        enum: ['Admin', 'User'],
        default: 'User',
    }
});

userSchema.pre('save',async function(this:IUser, next){
    const hashPassword = await hash(this.password, 12);

    this.password = hashPassword;

    next();
})

export {userSchema};