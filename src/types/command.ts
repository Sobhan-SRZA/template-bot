import MessageContext from "./MessageContext";
import TelegramClient from "../classes/Client";

type Categories = "misc" | "admin" | "owner" | "nsfw";

export default interface CommandType {
    data: {
        name: string;
        description: string;
    };
    category: Categories;
    aliases?: string[];
    usage?: string;
    cooldown: number;
    only_owner?: boolean;
    only_group?: boolean;
    only_admins?: boolean;
    run: (client: TelegramClient, ctx: MessageContext, args: string[]) => void;
}

export type {
    Categories
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