const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config(); // Load environment variables first

const port = process.env.PORT || 5000;

// Import Routes
const authRoute = require('./routes/auth');
const postRoute = require('./routes/posts');

// Connect to DB
mongoose.connect(process.env.DB_CONNECT, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("Connected to DB");
}).catch(err => {
    console.error("DB Connection Error:", err);
});

console.log("DB_CONNECT:", process.env.DB_CONNECT);

// Middleware
app.use(express.json());
app.use(cors());

// This is like friends creating their secret cards (registering)
app.post('/register', (req, res) => {
    const { username, password } = req.body;
    // Store this in MongoDB for future reference
});

// This is like checking if the card matches when someone wants to enter (login)
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    // Check if this matches what's in MongoDB
});

// Route middleware
app.use('/api/user', authRoute);
app.use('/api/posts', postRoute);

app.get('/', function (req, res) {
    res.send('Hello World');
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
