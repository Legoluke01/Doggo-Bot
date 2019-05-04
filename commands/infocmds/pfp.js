const Discord = require("discord.js");
const ms = require('ms')

module.exports.run = async (bot, msg, args) => {

  var get_message = await msg.channel.send("Generating avatar...");
  let target = msg.mentions.users.first() || msg.author;

  await msg.channel.send({files: [
    {
      attachment: target.displayAvatarURL,
      name: "avatar.png"
    }
  ]});

  get_message.delete();

}

module.exports.help = {
  name: "pfp",
};
