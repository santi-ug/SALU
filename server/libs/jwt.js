import * as dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
dotenv.config();

export function createAccessToken(payload) {
    return new Promise((resolve, reject) => {
        jwt.sign(
            payload, 
            process.env.JWT_SECRET, 
            // 4 hours
            {expiresIn: 4 * 60 * 60}, 
            (err, token) => {
                if (err) reject(err)
                resolve (token)
            }
        )
    })
}
