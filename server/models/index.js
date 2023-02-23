// import mongoose from "mongoose";
// mongoose.Promise = global.Promise;

import UserModel from "./user.model.js";
import ChatModel from "./chat.model.js";
import MessageModel from "./message.model.js";

const db = {
    User: UserModel,
    Chat: ChatModel,
    Message: MessageModel
};

export default db;