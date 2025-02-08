import { NarrowedContext, Scenes } from "telegraf";
import { Message, Update } from "telegraf/typings/core/types/typegram";

type MyContext = Scenes.WizardContext;

export default interface MessageContext extends NarrowedContext<MyContext, {
    message: Update.New & Update.NonChannel & Message.TextMessage;
    update_id: number;
}> { }

export type {
    MyContext
}
/**
 * @copyright
 * Coded by Sobhan-SRZA and Aria Fendereski | https://github.com/Sobhan-SRZA | https://github.com/ariafi
 * @copyright
 * Work for Vixium Team | https://discord.gg/vefvUNyPQu
 * @copyright
 */