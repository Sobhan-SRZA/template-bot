"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const error_1 = tslib_1.__importDefault(require("../utils/error"));
const post_1 = tslib_1.__importDefault(require("../functions/post"));
const fs_1 = require("fs");
exports.default = async (client) => {
    try {
        let amount = 0, dirname = `${process.cwd()}/dist/src/triggers`, triggers = (0, fs_1.readdirSync)(dirname).filter(file => file.endsWith(".js"));
        for (const file of triggers) {
            const triggerFile = await Promise.resolve(`${`${dirname}/${file}`}`).then(s => tslib_1.__importStar(require(s)));
            const trigger = triggerFile.default || triggerFile;
            await trigger(client);
            amount++;
        }
        (0, post_1.default)((String(amount)).cyan + " Trigger Is Loaded!!".green, "S");
    }
    catch (e) {
        (0, error_1.default)(e);
    }
};
/**
 * @copyright
 * Coded by Sobhan-SRZA (mr.sinre) | https://github.com/Sobhan-SRZA
 * @copyright
 * Work for Persian Caesar | https://dsc.gg/persian-caesar
 * @copyright
 * Please Mention Us "Persian Caesar", When Have Problem With Using This Code!
 * @copyright
 */ 
//# sourceMappingURL=triggersHandler.js.map