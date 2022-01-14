const i18n = require("../util/i18n");

module.exports = {
  name: "invite",
  description: i18n.__("invite.description"),
  execute(message) {
    return message.member
      .send(
        `https://discord.com/api/oauth2/authorize?client_id=931592271244173322&permissions=3723750471&scope=bot%20applications.commands
    `
      )
      .catch(console.error);
  }
};
