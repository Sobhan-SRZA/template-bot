import CommandType, { Categories } from "../types/command";
import config from "../../config";
import { QuickDB } from "quick.db";
import { Telegraf } from "telegraf";
import { Collection } from "./Collection";
import { MyContext } from "../types/MessageContext";

export default class TelegramClient extends Telegraf<MyContext> {
    commands: Collection<string, CommandType>;
    cooldowns: Collection<string, Collection<number, number>>;
    config;
    db: QuickDB | null;
    constructor(token?: string, options?: Telegraf.Options<any>) {

        super(token || config.bot.token, options);
        this.config = config;
        this.commands = new Collection();
        this.cooldowns = new Collection();
        this.db = null;
    }

    cmds_info_list_str(category_name: Categories) {
        let description = "";
        this.commands
            .filter(cmd => cmd.category === category_name)
            .forEach((cmd) => {
                description += `/${cmd.data.name} - \`${cmd.data.description}\`\n`;
            });

        return description;
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