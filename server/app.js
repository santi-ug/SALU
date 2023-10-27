import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import mainRouter from "./src/routes/mainRouter.js";
const app = express();

app.use(cors());
// mongoose.connect('mongodb://localhost/DATABASENAME', { useNewUrlParser: true, useUnifiedTopology: true});



app.use('/api/v1', mainRouter);

export default app;

// const User = require('./user.model');
// // Create a new user
// const newUser = new User({
//  username: 'john_doe',
//  email: 'john@example.com',
//  password: 'password123',
// });
// // Save the user to the database
// newUser.save()
//  .then((user) => {
//  console.log('User created:', user);
//  })
//  .catch((error) => {
//  console.error('Error creating user:', error);
//  });