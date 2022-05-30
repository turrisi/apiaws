import { Router } from "express";
import {userSignUp, userSignIn} from "../../controllers/users.js"

const router = Router();

router.post("/signup", userSignUp)
router.post("/signin", userSignIn)

export default router