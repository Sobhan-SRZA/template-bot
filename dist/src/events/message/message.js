"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const error_1 = tslib_1.__importDefault(require("../../utils/error"));
const checkCmdCooldown_1 = tslib_1.__importDefault(require("../../utils/checkCmdCooldown"));
const checkMember_1 = tslib_1.__importDefault(require("../../utils/checkMember"));
const checkAdmin_1 = tslib_1.__importDefault(require("../../utils/checkAdmin"));
const checkOwner_1 = tslib_1.__importDefault(require("../../utils/checkOwner"));
exports.default = async (client, message) => {
    try {
        const db = client.db;
        // Filter the bots
        if (message.from.is_bot)
            return;
        // Filter Commands
        if (!message.text || !message.text.startsWith("/"))
            return;
        const args = message.text.slice(1).trim().split(/ +/g), mention = `@${client.botInfo?.username}`;
        let commandName = args.shift().toLowerCase();
        // Filter Other Bots Commands In Groups 
        if (message.chat.type !== "private")
            if (!commandName.includes(mention))
                return;
        commandName = commandName.replace(mention, "");
        const command = client.commands.get(commandName) ||
            client.commands.find(a => a.aliases && a.aliases.includes(commandName));
        // Filter Only Valid Commands
        if (!command && message.chat.type === "private")
            return await message.sendMessage("⚠دستور تعریف نشده!");
        // Filter Group Commands
        if (command.only_group && await (0, checkMember_1.default)(message))
            return;
        // Filter Admins
        if (command.only_admins && await (0, checkAdmin_1.default)(message))
            return;
        // Filter Owner
        if (command.only_owner && await (0, checkOwner_1.default)(message))
            return;
        // Cooldown
        if (await (0, checkCmdCooldown_1.default)(message, command))
            return;
        // Command Handler
        await db.add("totalCommandsUsed", 1);
        return command.run(client, message, args);
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
//# sourceMappingURL=message.js.map