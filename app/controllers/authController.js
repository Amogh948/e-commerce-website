import User from "../models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
const authController = {}
import {validationResult} from "express-validator"

dotenv.config()

authController.register = async (req,res) => {
    const errors = validationResult(req)
    
    if(!errors.isEmpty()){
        return res.status(400).json({errors : errors.array()})
    }
    try {
        const { name, email, password, phoneNo } = req.body;
        const existingUser = await User.findOne({ email });
        if (existingUser){
            return res.status(400).json({ message: "Email already exists" })
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = await User.create({
          name,
          email,
          password: hashedPassword,
          phoneNo
        });
    
        return res.status(201).json({ message: "User registered successfully" });
    
        } catch (error) {
        return res.status(500).json({ error: error.message });
        }
    };

    authController.login = async (req,res) => {
        try {
            const { email, password } = req.body;
 
            const user = await User.findOne({ email });
            if(!user){
                return res.status(400).json({ message: "Invalid email or password" });
            }

            const isMatch = await bcrypt.compare(password, user.password);
            if(!isMatch){
                return res.status(400).json({ message: "Invalid email or password" });
            }

            const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: "7d" });
        
            return res.json({ token, userId: user._id, name: user.name });
        
          } catch (error) {
             return res.status(500).json({ error: error.message });
          }
    }

    export default authController
