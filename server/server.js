// set up .env and port

import * as dotenv from 'dotenv';
dotenv.config();
const port = process.env.PORT || 8080;

// set up express

import express from 'express';
const app = express();

app.get(
    '/',
    (req, res) => res.send('Hello World')
);

app.listen(
    port,
    () => console.log(`Listening on port ${port}`)
);