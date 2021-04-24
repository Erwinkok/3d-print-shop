import ProductRoutes from "./product.route";
import {Application} from "express";

const configureRoutes = (app: Application) => {
    app.use('/api/product/', ProductRoutes);
};

export default configureRoutes;