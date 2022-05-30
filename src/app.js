import express from "express";
import morgan from "morgan";
import routes from "./routes/index.js";
import jwtCheck from "./middlewares/authjwt.js";

const server = express();
// server.use(jwtCheck)
server.use(express.json());
server.use(morgan("dev"));
server.use("/api", routes);
server.use((error, req, res, next) => {
    const status = error.status || 500;
    return res.status(status).json({ error: error.toString() });
});

export default server;