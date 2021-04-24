import path from "path";
import express from "express";
import cors from "cors";
import configureRoutes from "./routes";
import "./config/database";
import ProductSeeder from "./seed/product-seeder";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use(express.static(path.resolve(__dirname, '../public')));

configureRoutes(app);

ProductSeeder.runSeeder();

app.get("/", (req, res) => {
    res.send("Ok");
});

app.listen(5000, () => {
    console.log("Listening on port 5000");
});
