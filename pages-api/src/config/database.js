import mongoose from "mongoose";

const db = mongoose
    .connect("mongodb://localhost:27017/cms-pages", {
        autoIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
    })
    .then(() => console.log("Successfully connected to the database"))
    .catch((error) => console.log(error));

export default db;