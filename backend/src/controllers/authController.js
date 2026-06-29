import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import db from "../config/db.js";

function createToken(user) {
  return jwt.sign(
    {
      id: user.id,
      role: user.role,
      isDemo: Boolean(user.is_demo),
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "7d",
    }
  );
}

function cleanUser(user) {
  return {
    id: user.id,
    firstName: user.first_name,
    lastName: user.last_name,
    email: user.email,
    phone: user.phone,
    role: user.role,
    isDemo: Boolean(user.is_demo),
  };
}

export async function signup(req, res) {
  try {
    const { firstName, lastName, email, phone, password } = req.body;

    if (!firstName || !email || !password) {
      return res.status(400).json({
        message: "First name, email, and password are required",
      });
    }

    if (password.length < 6) {
      return res.status(400).json({
        message: "Password must be at least 6 characters long",
      });
    }

    const [existingUsers] = await db.execute(
      "SELECT id FROM users WHERE email = ?",
      [email]
    );

    if (existingUsers.length > 0) {
      return res.status(409).json({
        message: "User with this email already exists",
      });
    }

    const passwordHash = await bcrypt.hash(password, 10);

    const [result] = await db.execute(
      `INSERT INTO users 
       (first_name, last_name, email, phone, password_hash, role)
       VALUES (?, ?, ?, ?, ?, ?)`,
      [firstName, lastName || null, email, phone || null, passwordHash, "citizen"]
    );

    const user = {
      id: result.insertId,
      first_name: firstName,
      last_name: lastName || null,
      email,
      phone: phone || null,
      role: "citizen",
      is_demo: false,
    };

    const token = createToken(user);

    return res.status(201).json({
      message: "Signup successful",
      token,
      user: cleanUser(user),
    });
  } catch (error) {
    console.error("Signup error:", error);

    return res.status(500).json({
      message: "Something went wrong during signup",
    });
  }
}

export async function login(req, res) {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: "Email and password are required",
      });
    }

    const [users] = await db.execute(
      "SELECT * FROM users WHERE email = ? AND is_active = TRUE",
      [email]
    );

    if (users.length === 0) {
      return res.status(401).json({
        message: "Invalid email or password",
      });
    }

    const user = users[0];

    const isPasswordCorrect = await bcrypt.compare(
      password,
      user.password_hash
    );

    if (!isPasswordCorrect) {
      return res.status(401).json({
        message: "Invalid email or password",
      });
    }

    const token = createToken(user);

    return res.json({
      message: "Login successful",
      token,
      user: cleanUser(user),
    });
  } catch (error) {
    console.error("Login error:", error);

    return res.status(500).json({
      message: "Something went wrong during login",
    });
  }
}

export async function demoLogin(req, res) {
  try {
    const demoEmail = "demo.citizen@civicconnect.in";

    const [users] = await db.execute(
      "SELECT * FROM users WHERE email = ?",
      [demoEmail]
    );

    let demoUser;

    if (users.length === 0) {
      const passwordHash = await bcrypt.hash("demo123", 10);

      const [result] = await db.execute(
        `INSERT INTO users
         (first_name, last_name, email, phone, password_hash, role, is_demo)
         VALUES (?, ?, ?, ?, ?, ?, ?)`,
        [
          "Demo",
          "Citizen",
          demoEmail,
          "9876543210",
          passwordHash,
          "citizen",
          true,
        ]
      );

      demoUser = {
        id: result.insertId,
        first_name: "Demo",
        last_name: "Citizen",
        email: demoEmail,
        phone: "9876543210",
        role: "citizen",
        is_demo: true,
      };
    } else {
      demoUser = users[0];
    }

    const token = createToken(demoUser);

    return res.json({
      message: "Demo login successful",
      token,
      user: cleanUser(demoUser),
    });
  } catch (error) {
    console.error("Demo login error:", error);

    return res.status(500).json({
      message: "Something went wrong during demo login",
    });
  }
}