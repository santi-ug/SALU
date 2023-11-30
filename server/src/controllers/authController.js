import Customer from "../models/customer.js";

export const test = (req, res) => {
    res.json("test is working");
}

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

        const customer = await Customer.create({
            name, email, password
        })

        return res.json(customer)
    } catch (error) {
        console.log(error);
    }
}
