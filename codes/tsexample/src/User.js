"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Memo_1 = __importDefault(require("./Memo"));
var Upper_1 = __importDefault(require("./Upper"));
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    User.prototype.getName = function () {
        return this.name;
    };
    User.prototype.fibanocci = function (no) {
        return (no == 0) || (no == 1) ? no : this.fibanocci(no - 1) + this.fibanocci(no - 2);
    };
    __decorate([
        Upper_1.default
    ], User.prototype, "name", void 0);
    __decorate([
        Memo_1.default
    ], User.prototype, "fibanocci", null);
    return User;
}());
exports.default = User;
