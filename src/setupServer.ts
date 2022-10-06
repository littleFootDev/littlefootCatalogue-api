import express, {json} from 'express';
import dotenv from 'dotenv';
//import json from 'body-parser'
import cookieParser from 'cookie-parser';
 
import {userRouter} from './routes/user.routes';

dotenv.config();

async function serverSetup() {
    const app: express.Application = express();
    await startServer(app);
    await middleware(app);
};

function middleware(app: express.Application) {
    app.use(json());
    app.use(cookieParser());
    app.use('/api/users', userRouter);
}

async function startServer(app: express.Application) {
    try {
        const port = process.env.PORT;
        const serverStarted:Promise<void> = new Promise<void>((resolve) => {
            app.listen(port, resolve);
            console.log(`Server is running on port ${port}`);  
        });
        await serverStarted;
    } catch (err) {
        console.log(err);
        return err;
    }
};

export {serverSetup}