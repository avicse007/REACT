"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Person_1 = __importDefault(require("./Person"));
var User_1 = __importDefault(require("./User"));
var p1 = new Person_1.default("Jack", 33);
var p2 = new Person_1.default("Jill", 31);
console.log(p1.getName(), p1.getAge(), p1["country"]);
console.log(p2.getName(), p2.getAge(), p2["country"]);
var u1 = new User_1.default("kim");
var u2 = new User_1.default("rakesh");
console.log(u1.getName());
console.log(u2.getName());
console.time("a");
console.log(u1.fibanocci(34));
console.timeEnd("a");
console.time("b");
u1.fibanocci(34);
console.timeEnd("b");
