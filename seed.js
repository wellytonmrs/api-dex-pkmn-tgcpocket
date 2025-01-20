// server/seed.js
const { MongoClient } = require("mongodb");
const dotenv = require("dotenv");
const fs = require("fs");
const path = require("path");

dotenv.config();

const mongoURI = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DBNAME;

async function seedDatabase() {
    const client = new MongoClient(mongoURI);

    try {
        await client.connect();
        console.log("Connected to MongoDB");

        const db = client.db(dbName);

        // Define collections and corresponding data files
        const collectionsToSeed = [
            { name: "cards", file: "cards.json" },
            { name: "ownedCards", file: "ownedCards.json" },
            { name: "sysdecks", file: "sysdecks.json" },
            { name: "users", file: "users.json" },
        ];

        // Seed each collection
        for (const collectionInfo of collectionsToSeed) {
            const collection = db.collection(collectionInfo.name);

            // Check if the collection already has data
            const count = await collection.countDocuments();
            if (count > 0) {
                console.log(
                    `Collection ${collectionInfo.name} already has data. Skipping seeding.`
                );
                continue;
            }

            // Read data from the JSON file
            const dataPath = path.join(__dirname, "data", collectionInfo.file);
            const data = JSON.parse(fs.readFileSync(dataPath, "utf-8"));

            // Insert data into the collection
            const result = await collection.insertMany(data);
            console.log(
                `Inserted ${result.insertedCount} documents into ${collectionInfo.name}`
            );
        }

        console.log("Database seeding complete.");
    } catch (error) {
        console.error("Error seeding database:", error);
    } finally {
        await client.close();
    }
}

seedDatabase();