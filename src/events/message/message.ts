import { Message, Update } from "telegraf/typings/core/types/typegram";
import { Context, NarrowedContext } from "telegraf";
import TelegramClient from "../../classes/Client";
import error from "../../utils/error";
import checkCmdCooldown from "../../utils/checkCmdCooldown";
import checkMember from "../../utils/checkMember";
import checkAdmin from "../../utils/checkAdmin";
import checkOwner from "../../utils/checkOwner";
import MessageContext from "../../types/MessageContext";

export default async (client: TelegramClient, message: MessageContext) => {
  try {
    const db = client.db!;

    // Filter the bots
    if (message.from.is_bot)
      return;

    // Filter Commands
    if (!message.text || !message.text.startsWith("/"))
      return;

    const
      args = message.text.slice(1).trim().split(/ +/g),
      mention = `@${client.botInfo?.username}`;

    let commandName = args.shift()!.toLowerCase();

    // Filter Other Bots Commands In Groups 
    if (message.chat.type !== "private")
      if (!commandName.includes(mention))
        return;


    commandName = commandName.replace(mention, "");
    const command =
      client.commands.get(commandName) ||
      client.commands.find(a => a.aliases && a.aliases.includes(commandName))!;

    // Filter Only Valid Commands
    if (!command && message.chat.type === "private")
      return await message.sendMessage("⚠دستور تعریف نشده!");

    // Filter Group Commands
    if (command.only_group && await checkMember(message))
      return;

    // Filter Admins
    if (command.only_admins && await checkAdmin(message))
      return;

    // Filter Owner
    if (command.only_owner && await checkOwner(message))
      return;

    // Cooldown
    if (await checkCmdCooldown(message, command))
      return;

    // Command Handler
    await db.add("totalCommandsUsed", 1);
    return command.run(client, message, args);
  } catch (e: any) {
    error(e);
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