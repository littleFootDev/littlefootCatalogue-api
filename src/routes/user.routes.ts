import {Router} from 'express';

import {signUp} from '../controllers/users/auth.controller';

const userRouter = Router();
//Auth Route

userRouter.post('/signup', signUp);



export {userRouter};