"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const checkCmdCooldown_1 = tslib_1.__importDefault(require("../utils/checkCmdCooldown"));
const checkMember_1 = tslib_1.__importDefault(require("../utils/checkMember"));
const checkAdmin_1 = tslib_1.__importDefault(require("../utils/checkAdmin"));
const checkOwner_1 = tslib_1.__importDefault(require("../utils/checkOwner"));
const error_1 = tslib_1.__importDefault(require("../utils/error"));
const event = {
    name: "message",
    run: async (client, message) => {
        try {
            const db = client.db, userId = message.from.id;
            // Filter the bots
            if (message.from.is_bot)
                return;
            // Filter Commands
            if (message.text && message.text.startsWith("/")) {
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
                // Filter Privet Commands
                if (command.only_privet && message.chat.type !== "private")
                    return;
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
                return await command.run(client, message, args);
            }
        }
        catch (e) {
            (0, error_1.default)(e);
        }
    }
};
exports.default = event;
/**
 * @copyright
 * Code by Sobhan-SRZA (mr.sinre) | https://github.com/Sobhan-SRZA
 * Developed for Persian Caesar | https://github.com/Persian-Caesar | https://dsc.gg/persian-caesar
 *
 * If you encounter any issues or need assistance with this code,
 * please make sure to credit "Persian Caesar" in your documentation or communications.
 */ 
//# sourceMappingURL=message.js.map