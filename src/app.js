import express from "express";
import cors from "cors";
//Middleware means just checking few condition  then we can get send response(middleware is flag)
import cookieParser from "cookie-parser";

const app = express();

app.use(cors());

app.use(express.json({ limit: "50mb" })); // to support JSON-encoded bodies
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(cookieParser());
app.use(express.static("public"));

//Routes import

import userRouter from "./routes/user.route.js";

// route declarations
app.use("/api/v1/users", userRouter);

// route url---> localhost:5000/api/v1/users

export default app;
