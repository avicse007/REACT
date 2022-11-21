"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function Memo(target, methodName, descriptor) {
    var fn = descriptor.value;
    var cache = {};
    // add (4,5)
    // fibanocci(34);
    // getEmployee(222);
    descriptor.value = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var key = args.join("_"); // 4_5
        if (!cache[key]) {
            cache[key] = fn.apply(target, args); // actual code
        }
        else {
            console.log("cache hit !!!");
        }
        return cache[key];
    };
}
exports.default = Memo;
// obj.fn(arg)
// fn.call(obj, arg);
// fn.apply(obj,[args]);
