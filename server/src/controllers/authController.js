import * as dotenv from 'dotenv';
import { createAccessToken } from '../../libs/jwt.js';
import { comparePassword, hashPassword } from "../helpers/auth.js";
import Customer from "../models/customer.js";
dotenv.config()

export const test = (req, res) => {
    res.json("test is working");
}

// Register
export const register = async (req, res) => {
    try {
        const {name, email, password} = req.body;

        // Check if name was entered
        if (!name) {
            return res.json({
                error: 'Nombre es requerido'
            })
        };
        // Check if email was properly entered
        if (!email.includes('@') || !email.includes('.') || !email) {
            return res.json({
                error: 'Ingrese el correo correctamente'
            })
        };
        // Check if email exists
        const exist = await Customer.findOne({email});
        if (exist) {
            return res.json({
                error: "Correo Electronico ya en uso"
            })
        };
        // Check if password is good
        if (!password || password.length < 8) {
            return res.json({
                error: 'Contraseña es requerida y debe tener 8 caracteres minimo.'
            })
        };

        // Hashing password
        const hashedPassword = await hashPassword(password)

        const customer = await Customer.create({
            name, email, password: hashedPassword
        })

        return res.json(customer)
    } catch (error) {
        console.log(error);
    }
}

// Login
export const login = async (req, res) => {
    try {
        const {email, password} = req.body;

        // Check if user exists
        const user = await Customer.findOne({email});
        if (!user) {
            return res.json({
                error: "usuario no existe"
            })
        }

        // Check if passwords match
        const match = await comparePassword(password, user.password);

        if (match) {

            // Create token
            const token = await createAccessToken({email: user.email, id: user._id, name: user.name})
            res.cookie('token', token).json(user)
        } 
        if(!match) {
            res.json("contraseña es incorrecta")
        }

    } catch (error) {
        console.log(error);
    }
}

// Logout
export const logout = (req, res) => {
        res.cookie('token', '', {
            expires: new Date(0)
        });
        return res.sendStatus(200);
}

export const profile = async (req, res) => {
    const userFound = await Customer.findById(req.user.id)
    if (!userFound) return res.status(400).json({message: "User not found"});
    return res.json({
        id: userFound._id,
        name: userFound.name,
        email: userFound.email
    })
}