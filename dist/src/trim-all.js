"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.trimAll = function (character) { return function (value) {
    while (value.slice(0, 1) === character) {
        value = value.slice(1);
    }
    while (value.slice(-1) === character) {
        value = value.slice(0, -1);
    }
    return value;
}; };
