import Page from "../model/page.model.js";
import BadRequest from "../exception/badrequest.js";
import PageStatus from "../enums/status.js";

export const findAll = async () => {
    return await Page.find({});
};

export const findPageById = async id => {
    const page = await Page.findById(id, null, { status: PageStatus.Published });

    if (page == null) {
        throw new BadRequest();
    }

    return page;
};

export const findPageByUrl = async url => {
    const page = await Page.findOne({ url: url, status: PageStatus.Published });

    if (page == null) {
        throw new BadRequest();
    }

    return page;
};

export const createPage = async page => {
    const newPage = new Page(page);
    newPage.status = PageStatus.Published;

    return await newPage.save();
};