const { MessageEmbed } = require("discord.js");
const i18n = require("../util/i18n");

module.exports = {
    name: "help",
    aliases: ["h", "cmd"],
    description: i18n.__("help.description"),
    execute(message) {
        let commands = message.client.commands.array();

        let helpEmbed = new MessageEmbed()
            .setTitle(i18n.__mf("help.embedTitle", { botname: message.client.user.username }))
            .setDescription(i18n.__mf("help.embedDescription"))
            .setColor("RANDOM")
            .setFooter(`Angefordert von: ${message.author.username}`);

        commands.forEach((cmd) => {
            helpEmbed.addField(
                `**${message.client.prefix}${cmd.name} ${cmd.aliases ? `(${cmd.aliases})` : ""}**`,
                `${cmd.description}`,
                true
            );
        });

        helpEmbed.setTimestamp();

        return message.channel.send(helpEmbed).catch(console.error);
    }
};
