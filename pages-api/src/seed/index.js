import * as pageController from "../controller/page.controller.js";

const pages = [
    {
        name: "Home",
        url: "/",
        status: 1
    },
    {
        name: 'Pokeball',
        url: '/pokeball',
        status: 1
    }
];

const seed = () => pages.forEach(pageController.createPage);

export default seed;