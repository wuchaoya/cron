"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const child_process_1 = require("child_process");
const fs = require("fs");
function updateJsonData() {
    console.log(__dirname);
    child_process_1.exec(`sh ${__dirname}/../sh/update.sh`, function (error, stdout, stderr) {
        console.log(error || stderr || stdout);
        let fd = fs.openSync(`${__dirname}/../log/${new Date().toLocaleDateString().replace(/\//g, '-') + '-' + new Date().toLocaleTimeString()}.txt`, 'w');
        fs.writeFileSync(fd, stdout, 'utf8');
        fs.closeSync(fd);
    });
}
exports.default = updateJsonData;
//# sourceMappingURL=updateJsonData.js.map