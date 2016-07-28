"use strict";
function trimAll(character) {
    return function (value) {
        while (value.slice(0, 1) === character) {
            value = value.slice(1);
        }
        while (value.slice(-1) === character) {
            value = value.slice(0, -1);
        }
        return value;
    };
}
exports.trimAll = trimAll;
