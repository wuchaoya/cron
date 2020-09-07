"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Koa = require("koa");
const cron = require("node-cron");
const updateJsonData_1 = require("./updateJsonData");
const app = new Koa();
app.use(ctx => {
    ctx.body = 'koa';
});
cron.schedule('0 45 15 * * *', () => {
    updateJsonData_1.default();
});
app.listen(3000, () => {
    console.log('Server is running at http://localhost:3000');
    console.log('Press CTRL-C to stop \n');
});
//# sourceMappingURL=index.js.map