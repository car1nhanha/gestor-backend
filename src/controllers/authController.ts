import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import Volunteer from "../models/volunteer";

const JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret";

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const volunteer = await Volunteer.findOne({
      email: email.toLowerCase(),
      role: "admin",
    });

    if (!volunteer) {
      return res.status(401).json({ message: "Authentication failed" });
    }

    const isMatch = await volunteer.comparePassword(password);

    if (!isMatch) {
      return res.status(401).json({ message: "Authentication failed" });
    }

    const token = jwt.sign(
      { id: volunteer._id, role: volunteer.role },
      JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.json({ token });
  } catch (error) {
    res.status(500).json({ message: "Error during authentication", error });
  }
};

export const register = async (req: Request, res: Response) => {
  try {
    const { name, email, password, location } = req.body;
    const volunteer = new Volunteer({
      name,
      email: email.toLowerCase(),
      password,
      location,
      role: "admin", // Only admins can register with a password
    });

    await volunteer.save();

    res.status(201).json({ message: "Admin registered successfully" });
  } catch (error) {
    res.status(400).json({ message: "Error registering admin", error });
  }
};

export const verifyToken = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.body.auth = decoded;
    console.log({ decoded });
    next();
  } catch (error) {
    res.status(401).json({ message: "Unauthorized" });
  }
};
