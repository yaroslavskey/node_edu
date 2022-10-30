import express, { Request, Response, NextFunction } from 'express';
import { userRouter } from './users/users.js';

const port = 8000;
const app = express();

app.use((req, res, next) => {
    console.log(`время `, Date.now());
    next();
});

app.get('/hello', (req, res) => {
    //res.type('application/json');
    //res.set('Content-Type', text/plain);
    //res.status(202).json({dddd: true});
    //res.end();
    throw new Error('error');
 
});

app.use('/users', userRouter);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.log(err.message);
    res.status(500).send(err.message);
});


app.listen(port, () => {
    console.log(`сервер запущен на 127.0.0.1 : ${port}`);
});

