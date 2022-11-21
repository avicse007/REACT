"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function Nationality(config) {
    return function (target) {
        console.log("called ", target);
        Object.defineProperty(target.prototype, "country", {
            value: config.name
        });
    };
}
exports.default = Nationality;
