import {Schema, model} from "mongoose";

const User = model(
    "User",
    new Schema({
        first_name: String,
        second_name: String,
        display_name: String,
        login: String,
        email: String,
        phone: String,
        password: String
    })
);

export default User;
