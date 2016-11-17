module.exports = {
    entry: "./index.js",
    output: { filename: "./dist/bundle.js" },
    devtool: "source-map",
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    },
};
