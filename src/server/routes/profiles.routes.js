import { getMyProfile, getProfileByLogin } from "../controllers/profiles.controllers.js";
import { verifyToken } from "../middleware/auth.middleware.js";

const profiles = (app) => {
    app.get("/profile", verifyToken, getMyProfile);
    app.get("/profiles/:login", getProfileByLogin);
};

export default profiles;
