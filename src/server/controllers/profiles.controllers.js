import db from "../models/index.js";
import {StatusCodes} from "http-status-codes";

export const getMyProfile = async(req, res) => {

    // Since _id field is guaranteed
    // to be unique by mongodb,
    // which means
    // there can only be one user
    // with such id; so it's safe
    // to run findOne

    const user = await db.User
        .findOne({
            _id: req.userId
        });

    if (!user)
        return res
            .status(StatusCodes.INTERNAL_SERVER_ERROR)
            .send({ message: "Couldn't find user with such _id" });

    return res
        .status(StatusCodes.OK)
        .send({
            message: "User found",
            user: {
                first_name: user.first_name,
                second_name: user.second_name,
                display_name: user.display_name,
                login: user.login,
                email: user.email,
                phone: user.phone,

            }
        });
};

export const getProfileByLogin = async(req, res) => {
    const login = req.params.login;
    const user = db.User
        .find({
            login: login
        });
    const usersAmount = await user.count();

    if (usersAmount === 0)
        return res
            .status(StatusCodes.NOT_FOUND)
            .send({ message: "No such user" });

    if (usersAmount > 1)
        return res
            .status(StatusCodes.INTERNAL_SERVER_ERROR)
            .send({ message: "Found multiple users with such login" });

    // Return user info that is safe to share
    // (don't include password, email and phone)
    return res
        .status(StatusCodes.OK)
        .send({
            message: "User found",
            user: {
                first_name: user.first_name,
                second_name: user.second_name,
                display_name: user.display_name,
                login: user.login
            }
        });

};
