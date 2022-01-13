"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true
    },
    dept: {
        type: String,
        required: true
    },
    mobile: {
        type: Number,
        required: true
    }
});
const UserModel = (0, mongoose_1.model)('User', userSchema);
exports.default = UserModel;