"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = checkOwner;
const tslib_1 = require("tslib");
const __1 = tslib_1.__importDefault(require("../.."));
const error_1 = tslib_1.__importDefault(require("./error"));
async function checkOwner(message) {
    try {
        if (!__1.default.config.bot.support.owners.includes(message.from.id))
            return true;
        return false;
    }
    catch (e) {
        (0, error_1.default)(e);
    }
}
/**
 * @copyright
 * Code by Sobhan-SRZA (mr.sinre) | https://github.com/Sobhan-SRZA
 * Developed for Persian Caesar | https://github.com/Persian-Caesar | https://dsc.gg/persian-caesar
 *
 * If you encounter any issues or need assistance with this code,
 * please make sure to credit "Persian Caesar" in your documentation or communications.
 */ 
//# sourceMappingURL=checkOwner.js.map