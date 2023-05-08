import jwt from "jsonwebtoken";
import db from "../models/index.js";
import * as dotenv from "dotenv";
import {StatusCodes} from "http-status-codes";
dotenv.config();

const assureLoginIsTakenOrFree = async(loginIsTakenOrFree, req, res, next) => {

    const login = req.body.login;

    const user = await db.User.exists({
        login: login
    });

    if (loginIsTakenOrFree === "free") {
        if (user)
            return res
                .status(StatusCodes.UNAUTHORIZED)
                .send({ message: "This login is already taken" });
        next();
    }

    else if (loginIsTakenOrFree === "taken") {
        if (!user)
            return res
                .status(StatusCodes.UNAUTHORIZED)
                .send({ message: "There is no user with such login" });
        next();
    }

    else
        return res
            .status(StatusCodes.INTERNAL_SERVER_ERROR)
            .send({ message: "Internal error occurred" });
};

export const assureLoginIsFree = async(req, res, next) => {
    return assureLoginIsTakenOrFree("free", req, res, next);
};

export const assureLoginIsTaken = async(req, res, next) => {
    return assureLoginIsTakenOrFree("taken", req, res, next);
};

export const verifyToken = (req, res, next) => {
    const token = req.headers["x-access-token"];
    if (!token)
        return res
            .status(StatusCodes.UNAUTHORIZED)
            .send({ message: "No token provided" });
    jwt.verify(
        token,
        process.env.JWT_SECRET_KEY,
        (err, decoded) => {
            if (err)
                return res
                    .status(StatusCodes.UNAUTHORIZED)
                    .send({ message: "Invalid token provided" });
            req.userId = decoded.id;
            next();
        });
};
