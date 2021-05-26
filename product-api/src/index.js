import "./config/database.js";
import express from "express";
import cors from "cors";
import router from "./route/index.js";
import seed from "./seed/index.js";

const app = express();

seed();

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended: false}));
app.use(router);

app.listen(1002, () => {
    console.log("Product API listening on port: 1002");
});
