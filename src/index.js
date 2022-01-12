"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_1 = __importDefault(require("./config/db"));
const routes_1 = require("./routes/routes");
const app = (0, express_1.default)();
const PORT = 4001;
app.use('/', routes_1.router);
app.get('/', (req, resp) => {
    resp.json({ data: "Test Page" });
});
(0, db_1.default)();
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});
