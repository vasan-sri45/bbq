import jwt from "jsonwebtoken";
import { getAuthCookieName, getAuthCookieOptions } from "../../utils/cookies.js";
import Employee from "../../models/auth/employee.model.js";
import { generateToken} from "../../utils/generateToken.js";
import asyncHandler from "express-async-handler";
import validator from "validator";
import bcrypt from "bcryptjs";

export const registerEmployee = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existing = await Employee.findOne({ email });
    if (existing) {
      return res.status(400).json({
        success: false,
        message: "User already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await Employee.create({
      name,
      email,
      password: hashedPassword,
    });

    res.status(201).json({
      success: true,
      message: "User created",
      data: user,
    });

  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

export const login = asyncHandler(async (req, res) => {
  let { email, password } = req.body || {};
  email = typeof email === 'string' ? email.trim().toLowerCase() : '';
  password = typeof password === 'string' ? password : '';

  if (!email || !password) { res.status(400); throw new Error('Please provide email and password'); }

  if (!validator.isEmail(email)) { res.status(400); throw new Error('Please provide a valid email address'); }

  const user = await Employee.findOne({ email }).select('+password +role');
  if (!user) { res.status(401); throw new Error('Invalid credentials'); }

  const ok = await user.comparePassword(password, user.password);
  if (!ok) { res.status(401); throw new Error('Invalid credentials'); }

  // Set HttpOnly cookie
  const token = generateToken(user._id, res); // update util to return the token string
  // return token in body too
  return res.status(200).json({
    success: true,
    message: 'Login successful.',
    token, // <= add this
    user: { id: user._id, email: user.email, mobile: user.mobile, role: user.role },
  });
});



export const getMe = asyncHandler(async (req, res) => {
  if (!req.user) {
    return res.status(401).json({ success: false, message: 'Unauthorized' });
  }

  // If protect middleware already projects minimal fields, this is safe to send.
  // Otherwise, build a safe shape explicitly:
  const u = req.user;
  console.log(u);
  const safeUser = {
    id: u._id || u.id,
    name: u.name,
    email: u.email,
    mobile: u.mobile,
    role: u.role,
  };

  return res.status(200).json({
    success: true,
    message: 'Authenticated user!',
    user: safeUser,
  });
});



export const logoutEmployee = (req, res) => {
  res.clearCookie(getAuthCookieName(), {
    ...getAuthCookieOptions(),
  });

  res.json({
    success: true,
    message: "Logged out successfully",
  });
};