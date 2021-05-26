import express from "express";
import nunjucks from "nunjucks";
import routes from "./routes/index.js";

const app = express();

app.set("view engine", "html");

app.use(express.json())
app.use(express.urlencoded({ extended:  false }))
app.use(express.static("public"));

nunjucks.configure('src/views', {
    autoescape: true,
    express: app,
    watch: true
});

app.use(routes);

app.listen(3000, () => console.log(`App listening to port 3000`));
