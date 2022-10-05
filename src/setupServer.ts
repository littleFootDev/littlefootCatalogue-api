import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

async function serverSetup() {
    const app: express.Application = express();
    await startServer(app);
};

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