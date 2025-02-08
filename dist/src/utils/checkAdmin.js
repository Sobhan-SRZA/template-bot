"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = checkAdmin;
const tslib_1 = require("tslib");
const error_1 = tslib_1.__importDefault(require("./error"));
const escapeMarkdown_1 = tslib_1.__importDefault(require("../functions/escapeMarkdown"));
async function checkAdmin(message) {
    try {
        const admins = await message.getChatAdministrators();
        if (!admins.some(a => a.user.id === message.from.id)) {
            await message.replyWithMarkdownV2((0, escapeMarkdown_1.default)(`**⚠ خطا!**\nاین دستور فقط برای ادمین ها قابل استفاده است!`));
            return true;
        }
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
//# sourceMappingURL=checkAdmin.js.map