"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findAndUpdate = exports.createUser = void 0;
const user_1 = __importDefault(require("../models/user"));
function createUser(input) {
    return user_1.default.create(input);
}
exports.createUser = createUser;
function findAndUpdate(query, update, options) {
    return user_1.default.findByIdAndUpdate(query, update, options);
}
exports.findAndUpdate = findAndUpdate;
