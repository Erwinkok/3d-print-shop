import express from "express";
import "./config/database";
import { runSeeder } from "./seed/product-seeder";

runSeeder();

const app = express();

app.get("/", (req, res) => {
    res.send("Ok");
});

app.listen(5000, () => {
    console.log("Listening on port 5000");
});
