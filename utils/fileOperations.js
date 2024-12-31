const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "../data.json");

const readJSON = () => {
    const data = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(data);
};

const writeJSON = (data) => {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 4));
};

module.exports = { readJSON, writeJSON };
