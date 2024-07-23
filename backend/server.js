const express = require("express");
const fs = require("fs");
const path = require("path");
const cors = require("cors"); // Import cors
const app = express();
const port = 5000;

app.use(express.json());
app.use(cors()); // Enable CORS

const dbPath = path.join(__dirname, "DB.json");

// Helper function to read DB.json
const readDB = () => {
  const rawData = fs.readFileSync(dbPath);
  return JSON.parse(rawData);
};

// Helper function to write to DB.json
const writeDB = (data) => {
  fs.writeFileSync(dbPath, JSON.stringify(data, null, 2));
};
// Endpoint to get all users
app.get("/users", (req, res) => {
  try {
    const data = readDB();
    res.status(200).json(data);

    console;
  } catch (error) {
    res.status(500).json({ message: "Error reading user data" });
  }
});
app.post("/register", (req, res) => {
  const { email, phone, password, firstName, lastName } = req.body;

  if (!email || !phone || !password || !firstName || !lastName) {
    return res
      .status(400)
      .json({ message: "Please fill out all required fields." });
  }

  // Validate the input (e.g., email, phone)
  if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
    return res.status(400).json({ message: "Invalid email address" });
  }
  if (!/^[0-9]{10}$/.test(phone)) {
    return res
      .status(400)
      .json({ message: "Invalid phone number (should be 10 digits)" });
  }

  // Read existing data
  const data = readDB();

  // Check if email already exists
  if (data.some((user) => user.email === email)) {
    return res.status(400).json({ message: "Email already registered" });
  }

  // Add new user
  data.push({ email, phone, password, firstName, lastName });

  // Write updated data to DB.json
  writeDB(data);

  res.status(200).json({ message: "Registration successful" });
});
app.post("/login", (req, res) => {
  const { email, password } = req.body;
  console.log(req.body);

  if (!email || !password) {
    return res
      .status(400)
      .json({ message: "Please fill out all required fields." });
  }

  // Validate the input (e.g., email, phone)
  if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
    return res.status(400).json({ message: "Invalid email address" });
  }

  // Read existing data
  const data = readDB();
  // Find the user with the matching email and password
  const user = data.find((u) => u.email === email && u.password === password);
  if (user) {
    res.json({ message: "Login successful" });
  } else {
    res.status(401).json({ message: "Invalid username or password" });
  }
  // console.log(data);

  res.status(200).json({ message: "login successful" });
});
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
