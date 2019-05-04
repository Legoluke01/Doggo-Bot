const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");
let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));

module.exports.run = async (bot, message, args) => {
  if (message.author.id !== '317098359116529666') return message.reply("This command is still being tested. When it is done I will make an annoucement on the support server that it is ready.");

  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Moderators dont have any infractions. :)");
  let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
  if(!wUser) return message.reply("I couldn't find them.");
  let infractions = warns[wUser.id].warns;

  message.reply(`<@${wUser.id}> has ${infractions} warnings.`);

}
module.exports.help = {
  name: "infractions"
}
