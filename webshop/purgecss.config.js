module.exports = {
    content: ["src/views/**/*.html"],
    css: ["public/assets/css/app.css"],
    extractors: [
        {
            extractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
            extensions: ["html"]
        }
    ]
};