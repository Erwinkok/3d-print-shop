const express = require("express");
const nunjucks = require("nunjucks");
const axios = require("axios").default;

const app = express();

app.set("view engine", "njk");

nunjucks.configure(__dirname + '/views', {
    autoescape: true,
    express: app,
    watch: true,
});

app.use(express.json())
app.use(express.urlencoded({ extended:  false }))
app.use(express.static("public"));

app.get("/", async (req, res) => {
    res.render("dashboard/index", { title: "test title" });
});

app.listen(5000, () => console.log(`App listening to port 5000`));
