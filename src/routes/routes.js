"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const user_1 = require("../controllers/user");
const router = express_1.default.Router();
exports.router = router;
router.get('/home', user_1.homeDetail);
// router.get('/home', (Request, resp: Response) => {
//     resp.json({ message: "Home Page" });
// });
router.get('/about', (Request, Response) => {
    Response.json({ messsage: "About Page" });
});
