"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Shaper = void 0;
class Shaper {
    constructor() {
    }
    shape(message) {
        var shapedMessage = "";
        const newLineErase = message.replace(/\n/g, " ");
        const strList = newLineErase.split(" ");
        for (const str of strList) {
            if (str.indexOf('@') !== -1 || str.indexOf('http') !== -1 || str.indexOf('#') !== -1) {
                continue;
            }
            else {
                shapedMessage += str;
            }
        }
        return shapedMessage;
        //return message;
    }
}
exports.Shaper = Shaper;
