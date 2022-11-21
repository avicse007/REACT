"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function Upper(target, key) {
    var val = target[key]; // rakesh
    console.log("Upper ", target);
    var setter = function (data) {
        console.log(data, val);
        val = data.toUpperCase();
    };
    var getter = function () { return val; };
    Object.defineProperty(target, key, {
        get: getter,
        set: setter
    });
    /*
        get name() {

        }

        set name() {
            
        }


    */
}
exports.default = Upper;
