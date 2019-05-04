const Discord = require("discord.js");
const Enmap = require("enmap")

module.exports.run = async (bot, message, args) => {
  const key = `${message.guild.id}-${message.author.id}`;
  const levelEmbed = new Discord.RichEmbed()
    .setTitle(`${message.author.tag}'s  Rank`)
    .setColor("RANDOM")
    .addField("Level:", `${bot.points.get(key, "level")}`, true)
    .addField("XP:", `${bot.points.get(key, "points")}`, true)
     message.channel.send(levelEmbed);
}

module.exports.help = {
  name: "rank"
}
