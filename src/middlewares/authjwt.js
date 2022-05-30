import 'express-jwt';
import { expressjwt } from 'express-jwt';
// const jwt = require('express-jwt');
import jwks from 'jwks-rsa';

var jwt = new expressjwt({secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: 'https://dev-dipt57ml.us.auth0.com/.well-known/jwks.json'
}),
audience: 'localhost:3000/',
issuer: 'https://dev-dipt57ml.us.auth0.com/',
algorithms: ['RS256']
}).unless({path: ['http://localhost:3000/api/files']});

const jwtCheck = jwt
    

export default jwtCheck;

// import { PrismaClient } from '@prisma/client';
// import jwt from 'jsonwebtoken';

// const prisma = new PrismaClient();
// const secret = process.env.secret;

// export const verifyToken = async (req, res, next) => {

//     const token = req.headers['x-access-token'];
//     console.log("secret: ",secret);
//     console.log("token: ", token)
//     if (!token) return res.status(403).json({ message: 'No token provided.' });
//     const decoded = jwt.verify(token,secret) //jwt.verify(token, secret)
//     console.log(decoded);
//     // const user = await prisma.uSER.findUnique({})
//     next();
// }