import * as dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
dotenv.config();

export const authRequired = (req, res, next) => {
    const {token} = req.cookies

    if (!token) return res.status(401).json({message: "no token, authorization denied"});

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) return res.status(403).json({message: "invalid token"});

        req.user = user
        
        next()
    })
}