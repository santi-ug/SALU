import User from "../models/user.js";

export const getUser = async (req, res) => {
    const userID = req.params.id; // Assuming you're passing the user ID as a route parameter
    try {
      const user = await User.findById(userID);
  
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }

      return res.status(200).json(user);
    } catch (error) {
      console.error('Error fetching user:', error);
      return res.status(500).json({ message: 'Internal Server Error' });
    }
}


export const serverTest = async (req, res) => {
    res.json({
        message: 'Hello from server!'
    });
}

