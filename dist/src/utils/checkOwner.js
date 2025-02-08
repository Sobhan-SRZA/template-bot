"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = checkOwner;
const tslib_1 = require("tslib");
const error_1 = tslib_1.__importDefault(require("./error"));
const __1 = tslib_1.__importDefault(require("../.."));
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
 * Coded by Sobhan-SRZA (mr.sinre) | https://github.com/Sobhan-SRZA
 * @copyright
 * Work for Persian Caesar | https://dsc.gg/persian-caesar
 * @copyright
 * Please Mention Us "Persian Caesar", When Have Problem With Using This Code!
 * @copyright
 */ 
//# sourceMappingURL=checkOwner.js.map