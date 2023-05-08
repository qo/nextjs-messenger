import db from "../models/index.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { StatusCodes } from "http-status-codes";

export const signup = (req, res) => {

    const user = new db.User({
        ...req.body,
        password:
            bcrypt.hashSync(
                req.body.password,
                Number(process.env.BCRYPT_SALT)
            )
    });

    user.save((err, user) => {
        if (err)
            return res
                .status(StatusCodes.INTERNAL_SERVER_ERROR)
                .send({ message: err });
        res
            .status(StatusCodes.OK)
            .send({
                message: `${user.login} successfully registered`
            });
    });

};

export const signin = async(req, res) => {

    const user = await db.User
        .findOne({
            login: req.body.login
        });

    const passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
    if (passwordIsValid)
        return res
            .status(StatusCodes.OK)
            .send({
                message: "User was authenticated",
                token: jwt.sign(
                    {
                        id: user._id
                    },
                    process.env.JWT_SECRET_KEY,
                    {
                        expiresIn: process.env.JWT_EXPIRATION_TIME_IN_MS
                    }
                )
            });
    else
        return res
            .status(StatusCodes.UNAUTHORIZED)
            .send({
                message: "User was not authenticated"
            });
};
