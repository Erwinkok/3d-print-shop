import express from "express";
import * as pageController from "../controller/page.controller.js";
import BadRequest from "../exception/badrequest.js";
import NotFound from "../exception/notfound.js";

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const requestedPage = req.query.page;
        console.log(requestedPage);
        const pages = await pageController.findPageByUrl(requestedPage);

        console.log("all: ", pages);

        return res.send(pages);
    } catch (error) {
        return res.status(500).send();
    }
});

router.get("/:id", async (req, res) => {
    try {
        const page = await pageController.findPageById(req.params.id);

        console.log(":id ", page);

        return res.send(page);
    } catch (error) {
        if (error instanceof NotFound) {
            return res.status(404).send();
        }
        if (error instanceof BadRequest) {
            return res.status(400).send();
        }

        return res.status(500).send();
    }
});

router.get("/:url", async (req, res) => {
    try {
        const page = await pageController.findPageByUrl(req.params.url);

        console.log(":url ", page);

        return res.send(page);
    } catch (error) {
        if (error instanceof NotFound) {
            return res.status(404).send();
        }
        if (error instanceof BadRequest) {
            return res.status(400).send();
        }

        return res.status(500).send();
    }
});

router.post("/new", async (req, res) => {
    try {
        const page = await pageController.createPage(req.body);

        return res.send(page);
    } catch (error) {
        if (error instanceof NotFound) {
            return res.status(404).send();
        }
        if (error instanceof BadRequest) {
            return res.status(400).send();
        }

        return res.status(500).send();
    }
});

export default router;