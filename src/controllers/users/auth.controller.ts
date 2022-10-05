import { RequestHandler } from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

import {UserModel } from '../../models/users/User.model';

dotenv.config();
const secretToken = process.env.TOKEN_SECRET
 const maxAge :number = 3 * 24 * 60 * 1000;
 const createToken = (id: string) => {
    return jwt.sign({id}, secretToken!, {
        expiresIn : maxAge
    });
 };

const signUp : RequestHandler = async(req, res) => {
    try {
        const {speudo, password, email, roles} = req.body;
        const user = {
            speudo,
            password,
            email,
            roles
        };
        await UserModel.create(user),
        res.status(201).json({
            status: 'success',
            data: user
        });
    } catch (err) {
        res.json(err);
    }
};

const signIn : RequestHandler = async(req, res) => {
    try {
        const {email, password} = req.body;
        const user = await UserModel.findOne({ email});

        if(!user) {
            res.status(404).json({err: 'User not found'})
        } else {
            const isPassword = await user.comparePassword(password);

            if(!isPassword) {
              res.status(401).json({err: 'Incorrect Password'});  
            };

            const token = createToken(user._id);
            res.cookie('jwt', token, {httpOnly: true, maxAge});
            res.status(200).json({
                status: 'success',
                token,
                data: user
            });
        }

    } catch (err) {
        res.json(err);
    }
};

const signOut : RequestHandler = (req, res) => {
    res.cookie('jwt', "loggedOut", {
        expires: new Date(Date.now() + 10 * 1000),
        httpOnly: true
    });
    res.status(200).json({
        status: 'success',
    })
}

export {signUp, signIn, signOut};