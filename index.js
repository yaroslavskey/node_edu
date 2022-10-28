import express from 'express';

const port = 8000;
const app = express();



app.get('/hello', (req, res) => {
    res.send('Привет');
});

app.post('/hello', (req, res) => {
    res.send('Привет');
});

app.listen(port, () => {
    console.log(`сервер запущен на 127.0.0.1 : ${port}`);
});

