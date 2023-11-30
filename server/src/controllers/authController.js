import { comparePassword, hashPassword } from "../helpers/auth.js";
import Customer from "../models/customer.js";

export const test = (req, res) => {
    res.json("test is working");
}

// Register
export const registerUser = async (req, res) => {
    try {
        const {name, email, password} = req.body;
        // Check if name was entered
        if (!name) {
            return res.json({
                error: 'Nombre es requerido'
            })
        };
        // Check if password is good
        if (!password || password.length < 8) {
            return res.json({
                error: 'Contraseña es requerida y debe tener 8 caracteres minimo.'
            })
        };
        // Check email
        const exist = await Customer.findOne({email});
        if (exist) {
            return res.json({
                error: "Correo Electronico ya en uso"
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
export const loginUser = async (req, res) => {
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
            res.json("contraseña es correcta")
        } 
        if(!match) {
            res.json("contraseña es incorrecta")
        }
    } catch (error) {

    }
}