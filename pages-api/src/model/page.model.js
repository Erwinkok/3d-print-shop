import mongoose from "mongoose";

const pageSchema = mongoose.Schema({
    name: String,
    url: String,
    status: String,
    content: String,
}, { timestamp: true });

const Page = mongoose.model("Page", pageSchema);

export default Page;