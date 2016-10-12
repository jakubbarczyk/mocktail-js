"use strict";
/**
 * Trims all occurrences of the specified character from the front and end of a string.
 * This is a curried function.
 *
 * @param character {String} the character to be trimmed
 */
exports.trimAll = function (character) { return function (value) {
    while (value.slice(0, 1) === character) {
        value = value.slice(1);
    }
    while (value.slice(-1) === character) {
        value = value.slice(0, -1);
    }
    return value;
}; };
