import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

if (!process.env.DB_CONTEXT) {
    throw new Error("Can not connect to database with out a connection string.");
}

const db = mongoose
    .connect(process.env.DB_CONTEXT!, {
        autoIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
    })
    .then(() => console.log("Successfully connected to the database"))
    .catch((error) => console.log(error));

export default db;
