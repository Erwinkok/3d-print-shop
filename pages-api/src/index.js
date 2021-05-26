import "./config/database.js";
import express from "express";
import cors from "cors";
import router from "./route/page.route.js";
import seed from "./seed/index.js";

const app = express();

seed();

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended: false}));
app.use(router);

// app.get("/", async (req, res) => {
//     const page = await Page.findOne(page => page.path === req.query.page);

//     if (page == null) {
//         return res.status(404).send();
//     }

//     return res.send(page);
// });

// app.post("/", async (req, res) => {
//     const page = await new Page(req.body).save();
//     res.send(page);
// });

app.listen(1001, () => {
    console.log("Pages API listening on port: 1001");
});
