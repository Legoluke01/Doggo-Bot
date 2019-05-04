const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
      return message.channel.send("My creator is The Ultimate Doggo!");
}

module.exports.help = {
  name: "creator"
}
