import axios from "axios"

export const index = async (req, res) => {
    const response = await axios.get("http://localhost:1002/");
    const products = response.data;

    return res.render("products/all", { model: { products } });
};

export const detail = async (req, res) => {
    console.log(req.params.name);
    const response = await axios.get(`http://localhost:1002/${req.params.name}`);
    const product = response.data;

    return res.render("products/main", { model: { product }});
};
