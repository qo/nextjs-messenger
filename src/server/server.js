// set up .env
import * as dotenv from "dotenv";
dotenv.config();

// set up express
import express from "express";
const app = express();

// set up cors
import cors from "cors";

// set up common middleware
app.use(cors());
app.use(express.json());

// set up bcrypt
import bcrypt from "bcrypt";

// define routes

app.get(
    "/",
    (req, res) => res.send("Hello World")
);

// listen on specified port
const express_port = process.env.EXPRESS_PORT || 8080;
app.listen(
    express_port,
    () => console.log(`Express Server listening on port ${express_port}`)
);

// set up mongoose ODM
import mongoose from "mongoose";
mongoose.set("strictQuery", false);

// get mongodb URI
const mongodb_uri = process.env.MONGODB_URI;
if (!mongodb_uri)
    throw new Error(`
    MongoDB URI is not defined.
    Define it in .env file in root directory:
    MONGODB_URI="<your_uri>"`);

// connect to mongodb via mongoose
mongoose
    .connect(
        mongodb_uri
    )
    .then(
        () => console.log(`MongoDB connected on ${mongodb_uri}`)
    )
    .catch(
        e => {
            console.log(`Can't connected to MongoDB on ${mongodb_uri}: ${e}`);
            process.exit();
        }
    );

// setup up models
import db from "./models/index.js";

const getRootUsersAmount =
    async () => await db.User
        .find({
            login: "root"
        })
        .count();

// get amount of root users in the db
const rootUsersAmt = await getRootUsersAmount();
console.log(
    `Current amount of root users: ${rootUsersAmt}`
);

/*
    if there is exactly 1 root user,
    everything's in it's right place;
    otherwise all root users
    should be removed (if any)
    and a new one should be added
*/

if (rootUsersAmt !== 1) {

    if (rootUsersAmt > 1)
        await db.User.deleteMany({
            login: "root"
        });

    await db.User.create({
        first_name: "",
        second_name: "",
        display_name: "",
        login: "root",
        email: "",
        phone: "",
        password: bcrypt.hashSync(process.env.ROOT_PASSWORD, Number(process.env.BCRYPT_SALT))
    });

    const newRootUsersAmt = await getRootUsersAmount();
    console.log(
        `Amount of root users changed to ${newRootUsersAmt}`
    );

}

const getUsersAmount =
    async () => await db.User
        .find()
        .count();

// get amount of users
const usersAmt = await getUsersAmount();
console.log(
    `Current amount of users: ${usersAmt}`
);

// register routes
import auth from "./routes/auth.routes.js";
import profiles from "./routes/profiles.routes.js";
auth(app);
profiles(app);
