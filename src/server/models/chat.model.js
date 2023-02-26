import {Schema, model} from "mongoose";
import User from "./user.model.js";

const Chat = model(
    "Chat",
    new Schema({
        title: String,
        users: [{
            type: Schema.Types.ObjectId,
            ref: User
        }]
    })
);

export default Chat;
