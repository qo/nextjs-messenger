// set up .env

import * as dotenv from "dotenv";
dotenv.config();

// set up express

import express from "express";
const app = express();

app.get(
    "/",
    (req, res) => res.send("Hello World")
);

const express_port = process.env.EXPRESS_PORT || 8080;
app.listen(
    express_port,
    () => console.log(`Express Server listening on port ${express_port}`)
);

// set up mongodb

import mongoose from "mongoose";
mongoose.set("strictQuery", false);

const mongodb_uri = process.env.MONGODB_URI;
if (!mongodb_uri)
    throw new Error(`
    MongoDB URI is not defined.
    Define it in .env file in root directory:
    MONGODB_URI="<your_uri>"`);

mongoose
    .connect(
        mongodb_uri
    )
    .then(
        () => console.log(`MongoDB connected on ${mongodb_uri}`)
    )
    .catch(
        e => console.log(`Can't connected to MongoDB on ${mongodb_uri}: ${e}`)
    );


// check if user model is properly defined

import db from "./models/index.js";
const root = await db.User.create({
    first_name: "",
    second_name: "",
    display_name: "",
    login: "root",
    email: "",
    phone: "",
    password: "root"
});
console.log(root);
