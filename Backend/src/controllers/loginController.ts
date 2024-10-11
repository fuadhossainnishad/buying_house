import { Response, Request } from "express";
import { signupModel } from "../models/signupModel";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const loginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const user = await signupModel.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User Not found" });
    }

    const comparePassword = await bcrypt.compare(password, user.password);

    if (!comparePassword) {
      return res.status(400).json({ message: "Invalid Password" });
    }

    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET!,
      { expiresIn: "1h" }
    );

    res.status(200).json({ token, message: "Login Successful" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Login  data error", error: (error as Error).message });
  }
};
