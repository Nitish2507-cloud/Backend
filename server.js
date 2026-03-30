const express = require("express");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Test route
app.get("/", (req, res) => {
    res.send("Backend is running 🚀");
});

// Login API (Firebase token based)
app.post("/login", (req, res) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.json({ message: "No token provided ❌" });
    }

    const token = authHeader.split(" ")[1];

    // 👉 For now just accept token (basic version)
    if (token) {
        return res.json({ message: "Login successful ✅" });
    } else {
        return res.json({ message: "Invalid token ❌" });
    }
});

// PORT
const PORT = process.env.PORT || 5000;

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});