import { Router } from "express";
import { getAllFiles, deleteFiles, uploadFiles, renameFiles} from "../../controllers/files.js";
const router = Router();
import jwtCheck from "../../middlewares/authjwt.js";


//proteger rutas con el middleware de autenticacion por token
router.get("/",  getAllFiles)
router.delete("/", jwtCheck, deleteFiles)
router.post("/",  jwtCheck, uploadFiles)
router.put("/", jwtCheck, renameFiles)

export default router