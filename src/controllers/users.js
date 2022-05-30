import { PrismaClient } from "@prisma/client";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { createUser, userExistence, verifyUser } from '../helpers/Users/index.js';
import config from "../../config.js";


const prisma = new PrismaClient();
const secret = process.env.secret;

export const userSignUp = async (req, res) => {
    const { email, name, pass } = req.body;
    const existence = await userExistence(email, name);
    if (existence) return res.send("user already exists");
    else {
        const salt = await bcrypt.genSalt(10);
        var hashed = await bcrypt.hash(pass, salt);
        const newUser = {
            name: name,
            mail: email,
            password: hashed
        }
        const customResponse = await createUser(newUser);
        if (customResponse) {
            const token = jwt.sign({ id: customResponse.id }, secret, {
                expiresIn: 86400  //24 hs
            })
            return res.json({token});
        } else
            return res.send("user not created");
    }
}
// { 
//     "email": "algomas@mail.com", 
//     "name": "jose", 
//     "pass": "password2"
//     }
// {
//     "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OCwiaWF0IjoxNjUzNTc1NzgxLCJleHAiOjE2NTM2NjIxODF9.R0kA6U-w8Xk-SL253_UluZAr2gv2xnlCSN_17j_KmCA"
//   }

export const userSignIn = async (req, res) => {

    const { email, name, pass } = req.body;

    const existence = await userExistence(email, name);
    if(!existence) return res.send("user does not exist");
    const passMatch = await verifyUser(email, pass);
    if(!passMatch) return res.send("password does not match");
    const token = jwt.sign({ id: passMatch.id }, config.SECRET, {
        expiresIn: 86400  //24 hs
    })
    return res.json({token});
}