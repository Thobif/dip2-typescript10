"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.homeDetail = void 0;
const homeDetail = (req, resp) => {
    // let obj = {
    //     x: 12,
    //     y: 30
    // }
    //let data = sumData(obj);
    resp.json({
        message: "Home Page new",
        //data: data
    });
};
exports.homeDetail = homeDetail;
