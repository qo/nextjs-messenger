import { signup, signin } from "../controllers/auth.controllers.js";
import { assureLoginIsFree, assureLoginIsTaken } from "../middleware/auth.middleware.js";

const registerAuthRoutes = (app) => {
    app.post("/auth/signup", assureLoginIsFree, signup);
    app.post("/auth/signin", assureLoginIsTaken, signin);
};

export default registerAuthRoutes;
