import Customer from "../models/customer.js";

export const getCustomer = async (req, res) => {
    const customerID = req.params.id; // Assuming you're passing the user ID as a route parameter
    try {
      const customer = await Customer.findById(customerID);
  
      if (!customer) {
        return res.status(404).json({ message: 'Customer not found' });
      }

      return res.status(200).json(customer);
    } catch (error) {
      console.error('Error fetching customer:', error);
      return res.status(500).json({ message: 'Internal Server Error' });
    }
}

// export const registerCustomer = async (req, res) => {

// }

// export const loginCustomer = async (req, res) => {

// }

export const serverTest = async (req, res) => {
    res.json({
        message: 'Hello from server!'
    });
}

