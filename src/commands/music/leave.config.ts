import { Message } from "discord.js";
import { Command } from "../common.commands.config";
import { client } from "../../index";

export class leaveCommand extends Command {
  constructor(commandName: string, help: string[]) {
    super(commandName, help);
  }

  action(message: Message) {
    let voice = client.voice?.connections.first();

    if (!voice?.channel.id) {
      message.channel.send("`I'm not in a voice channel`");
      return;
    }

    voice?.disconnect();
  }
}
