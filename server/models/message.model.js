import {Schema, model} from "mongoose";
import User from "./user.model.js";
import Chat from "./chat.model.js";

const Message = model(
    "Message",
    new Schema({
        user: {
                type: Schema.Types.ObjectId,
                ref: User
        },
        chat: {
                type: Schema.Types.ObjectId,
                ref: Chat
        },
        time: Date,
        content: String,
        read_by: [{
                type: Schema.Types.ObjectId,
                ref: User
        }]
    })
);

export default Message;