import { Request, Response } from "express";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken'; 
import * as dotenv from 'dotenv'; 
import { signupModel } from "../models/signupModel"; 

dotenv.config();

export const signupUser = async (req: Request, res: Response) => { 
  const { firstname, lastname, email, phone, password, confirmPassword } = req.body;

  if (password !== confirmPassword) {
    return res.status(400).json({ message: "Passwords do not match" });
  }

  try {
    const hashpassword = await bcrypt.hash(password, 12);

    const newSignup = new signupModel({
      firstname,
      lastname,
      email,
      phone,
      password: hashpassword,
      confirmPassword: hashpassword,
    });

    await newSignup.save();

    const token = jwt.sign(
      {
        id: newSignup._id,
      },
      process.env.JWT_SECRET!,
      {
        expiresIn: "1h",
      }
    );
    res.status(201).json({ token });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: (error as Error).message });
  }
};
