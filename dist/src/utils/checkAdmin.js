"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = checkAdmin;
const tslib_1 = require("tslib");
const markdownToHtml_1 = tslib_1.__importDefault(require("../functions/markdownToHtml"));
const error_1 = tslib_1.__importDefault(require("./error"));
async function checkAdmin(message) {
    try {
        const admins = await message.getChatAdministrators();
        if (!admins.some(a => a.user.id === message.from.id)) {
            await message.reply((0, markdownToHtml_1.default)(`**⚠ خطا!**\nاین دستور فقط برای ادمین ها قابل استفاده است!`), { reply_parameters: { message_id: message.msgId } });
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
 * Code by Sobhan-SRZA (mr.sinre) | https://github.com/Sobhan-SRZA
 * Developed for Persian Caesar | https://github.com/Persian-Caesar | https://dsc.gg/persian-caesar
 *
 * If you encounter any issues or need assistance with this code,
 * please make sure to credit "Persian Caesar" in your documentation or communications.
 */ 
//# sourceMappingURL=checkAdmin.js.map