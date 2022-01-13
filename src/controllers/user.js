"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.homeDetail = void 0;
const users_service_1 = require("../services/users.service");
const homeDetail = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    //1.let myData = await UserModel.find();
    //2.Add Data=Cread
    //const user = await createUser({ name: "Jame Kameron", dept: "it", mobile: 958462541 });
    //3.Update
    const user = yield (0, users_service_1.findAndUpdate)({ name: "Jame Kameron" }, { dept: "SE" }, { mobile: 95784521 }, { new: true });
    resp.json({
        message: "Home Page new",
        student: user
    });
});
exports.homeDetail = homeDetail;
