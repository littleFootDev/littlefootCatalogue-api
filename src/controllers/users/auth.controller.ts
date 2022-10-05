import { RequestHandler } from 'express';

import {UserModel } from '../../models/users/User.model';


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

export {signUp};