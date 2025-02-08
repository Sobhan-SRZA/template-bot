"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = checkMember;
const tslib_1 = require("tslib");
const markdownToHtml_1 = tslib_1.__importDefault(require("../functions/markdownToHtml"));
const error_1 = tslib_1.__importDefault(require("./error"));
async function checkMember(message) {
    try {
        if (message.chat.type !== "group") {
            await message.reply((0, markdownToHtml_1.default)(`**⚠ خطا!**\nاین دستور فقط در گروه ها یا چنل ها قابل استفاده است!`), { reply_parameters: { message_id: message.msgId }, parse_mode: "HTML" });
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
//# sourceMappingURL=checkMember.js.map