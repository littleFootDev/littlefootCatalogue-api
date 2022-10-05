import { RequestHandler } from 'express';

import { IUser } from '../../interfaces/user.interface';
import {UserModel} from '../../models/users/User.model';


const getAllUsers: RequestHandler = async(req, res) => {
    try {
        const users = await UserModel.find({});
        res.status(200).json({
            status: 'success',
            data: users
        })
    } catch (err) {
        res.status(201).json({err});
    }
};

const getOneUser: RequestHandler = async(req, res) => {
    try {
        const user = await UserModel.findById(req.params.id);
        
        if(!user) {
            res.status(404).json({err: 'User not found'});
        };

        res.status(200).json({
            status: 'success',
            data: user
        });
    } catch (err) {
        res.status(201).json({err});
    }
};

const updateUser: RequestHandler = async(req, res) => {
    try {
        const updateUser = await UserModel.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });

        if(!updateUser) {
            res.status(404).json({err: 'User not found'});
        };

        res.status(200).json({
            status: 'success',
            data: updateUser
        });

    } catch (err) { 
        res.status(201).json({err});
    }
};

const deleteUser: RequestHandler = async(req, res) => {
    try {
        const deleteUser = await UserModel.findByIdAndDelete(req.params.id);

        if(!deleteUser) {
            res.status(404).json({err: 'User not found'});
        };

        res.status(200).json({
            status: 'success',
            data: null
        });
    } catch (err) {
        res.status(201).json({err});
    }
};


export {getAllUsers, getOneUser, updateUser, deleteUser};