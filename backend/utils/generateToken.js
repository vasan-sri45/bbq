

import jwt from "jsonwebtoken";

const FIFTEEN_DAYS_MS = 15 * 24 * 60 * 60 * 1000;

// Detect environment
const isProd = process.env.NODE_ENV === "production";

// Cookie name (__Host- prefix allowed only in HTTPS + path=/)
const COOKIE_NAME = isProd ? "__Host-jwt" : "jwt";

/**
 * Create JWT and send httpOnly cookie
 */
export const generateToken = (userId, res) => {
  if (!process.env.JWT_SECRET_KEY) {
    throw new Error("JWT secret missing");
  }

  // Create token
  const token = jwt.sign(
    { sub: String(userId) },
    process.env.JWT_SECRET_KEY,
    {
      expiresIn: "15d",
      issuer: process.env.JWT_ISSUER || "briefcasse",
      audience: process.env.JWT_AUDIENCE || "briefcasse-users",
      algorithm: "HS256",
    }
  );

  // Send cookie
  res.cookie(COOKIE_NAME, token, {
    httpOnly: true,

    // IMPORTANT:
    // production (HTTPS) → true
    // localhost → false
    secure: isProd,

    // IMPORTANT:
    // cross-site requires None
    // localhost requires Lax
    sameSite: isProd ? "None" : "Lax",

    path: "/",

    maxAge: FIFTEEN_DAYS_MS,
  });

  return token;
};



/**
 * Logout — remove cookie
 * MUST match options used while creating cookie
 */
export const clearAuthCookie = (res) => {
  res.clearCookie(COOKIE_NAME, {
    httpOnly: true,
    secure: isProd,
    sameSite: isProd ? "None" : "Lax",
    path: "/",
  });
};


