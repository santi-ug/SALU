import Customer from "../models/customer.js";

export const serverTest = async (req, res) => {
    res.json({
        message: 'Hello from server!'
    });
}

