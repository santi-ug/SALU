import jwt from 'jsonwebtoken';
import User from "../models/user.js";
import user from '../models/user.js';

export const authMiddleware = async (req, res, next) => {
    let token;
    if (req?.headers?.authorization?.startsWith('Bearer')) {
        token = req.headers.authorization.split(' ')[1];
        try {
            if (token) {
                const decoded = jwt.verify(token, process.env.JWT_SECRET);
                const user = await User.findById(decoded.id);
                req.user = user;
                next();
            }
        } catch (error) {
            res.json("Not authorized, token expired. Login again")
        }
    } else {
        res.json("No token provided");
    }
}

export const isAdmin = async (req, res, next) => {
    const {email} = req.user;
    const admin = await User.findOne({email});
    if (admin.role !== "admin") {
        res.json("Not authorized, you are not admin")
    } else {
        next();
    }
}
