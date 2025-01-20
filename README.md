# Pokemon TCG Pocket Card Tracker - Server

This is the backend server for the Pokemon TCG Pocket Card Tracker application. It's built with Node.js, Express.js, and MongoDB, providing a RESTful API for managing user data, card information, owned cards, and decks.

## Features

*   **API Endpoints:** Provides RESTful API endpoints to interact with the following data:
    *   `/api/cards`: Manage the Pokemon card library.
    *   `/api/ownedCards`: Manage user-owned cards.
    *   `/api/decks`: Manage system-defined decks.
*   **Database:** Uses MongoDB to store application data persistently.
*   **Data Seeding:** Includes a script to easily populate the database with initial data.
*   **Environment Variables:** Uses `.env` files to manage configuration, including the database connection string.

## Prerequisites

*   **Node.js:**  Version 20.14.0 or higher recommended.
*   **npm:** Usually comes bundled with Node.js.
*   **MongoDB:**
    *   **Local Installation:** You can install MongoDB Community Server on your local machine (see instructions below).

## Installation

1. **Clone the repository:**

    ```bash
    git clone <repository_url>
    cd <repository_name>/server
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

## Database Setup

### Local MongoDB Installation (Windows)

1. **Download:** Go to the [MongoDB Download Center](https://www.mongodb.com/try/download/community) and download the Windows MSI installer for MongoDB Community Server.
2. **Install:** Run the installer, choosing the "Complete" setup type. Select "Install MongoDB as a Service" and "Run service as Network Service user."
3. **Verify:** Open the Windows Services Manager and ensure the "MongoDB Server" service is running. Open a command prompt and type `mongo --version` to check the installation.

### Environment Variables

1. Create a `.env` file in the `server` directory.
2. Add the following environment variables to your `.env` file:

    ```
    MONGODB_URI=mongodb://localhost:27017  # For local MongoDB
    PORT=5000
    ```

    *   **`MONGODB_URI`:**
        *   **Local:** `mongodb://localhost:27017`
    *   **`PORT`:** The port on which the server will run (default is 5000).

## Running the Application

### Development

1. **Start the server:**

    ```bash
    npm start
    ```

    The server will run on `http://localhost:5000` (or the port specified in your `.env` file).

### Seeding the Database

The `data` directory contains JSON files with initial data for the application. To populate your MongoDB database:

1. **Run the seed script:**

    ```bash
    npm run seed
    ```

    This script will connect to the database and insert the data from the JSON files into the corresponding collections. **It will only insert data if the collections are empty.**

## API Endpoints

The following are the main API endpoints provided by the server. Replace `http://localhost:5000` with your server's URL if it's different.

### Cards (`/api/cards`)

*   **`GET /api/cards`:** Get all cards from the library.
*   **`POST /api/cards`:** (Not implemented in the provided code example, but you would add it for creating new cards in the library).

### Owned Cards (`/api/ownedCards`)

*   **`GET /api/ownedCards`:** Get all owned cards for all users.
*   **`POST /api/ownedCards`:** Add a card to the owned cards list. Accepts a PokemonCard object in the request body and automatically sets `qtd` to `1` or increments it if the card is already owned.
*   **`PATCH /api/ownedCards/:cardId`:** Update the quantity of an owned card. Expects `{ "quantity": newQuantity }` in the request body.
*   **`DELETE /api/ownedCards/:cardId`:** Remove a card from the owned cards list.

### System Decks (`/api/decks`)

*   **`GET /api/decks`:** Get all system decks.

## Further Development

*   **Authentication:** Implement user authentication (e.g., using JWT) to secure API endpoints and associate data with specific users.
*   **Error Handling:** Add more robust error handling and validation throughout the application.
*   **User Decks:** Add functionality to create and manage user-defined decks.
*   **Database Indexes:** Add indexes to your MongoDB collections to improve query performance, especially as your data grows.

## Contributing

Feel free to contribute to the project by submitting pull requests or opening issues.