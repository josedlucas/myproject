import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.json({
        message: 'Listo!'
    });
});


app.listen(3000, () => {
    console.log('Server run in port 3000');
});