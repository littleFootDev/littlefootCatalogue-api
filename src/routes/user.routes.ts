import {Router} from 'express';

import {signUp} from '../controllers/users/auth.controller';
import{getAllUsers, getOneUser, updateUser, deleteUser} from '../controllers/users/user.controller';

const userRouter = Router();

//Auth Route
userRouter.post('/signup', signUp);

//User Route
userRouter.get('/', getAllUsers);
userRouter.get('/:id', getOneUser);
userRouter.patch('/update/:id', updateUser);
userRouter.delete('/delete/:id', deleteUser);



export {userRouter};