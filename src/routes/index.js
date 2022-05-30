import { Router } from "express";
import user from "./users/index.js";
import files from "./files/index.js"


const router = Router();

router.use("/users", user);
router.use("/files", files);

export default router;