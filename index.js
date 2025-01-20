// server/index.js
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { MongoClient } = require("mongodb");

dotenv.config(); // Load environment variables from .env

const app = express();
const port = process.env.PORT || 5000; // Use port from .env or default to 5000

app.use(cors()); // Enable CORS for all origins (configure more restrictively in production)
app.use(express.json()); // Parse JSON request bodies

// MongoDB Connection URL (replace with your actual connection string)
const mongoURI = process.env.MONGODB_URI;

// Database and Collection Names
const dbName = "pokemon-tcg-tracker"; // Choose a name for your database
const cardsCollectionName = "cards";
const decksCollectionName = "decks";
const ownedCardsCollectionName = "ownedCards";

// Connect to MongoDB
const client = new MongoClient(mongoURI);

async function connectToMongoDB() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");

    // Set up database and collections globally for easy access in routes
    const db = client.db(dbName);
    global.cardsCollection = db.collection(cardsCollectionName);
    global.decksCollection = db.collection(decksCollectionName);
    global.ownedCardsCollection = db.collection(ownedCardsCollectionName);
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}

// Call the function to connect to MongoDB
connectToMongoDB();

// Placeholder route (for testing)
app.get("/", (req, res) => {
  res.send("Hello from your Pokemon TCG Tracker Server!");
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});