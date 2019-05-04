const Discord = require("discord.js");
const Enmap = require("enmap")

module.exports.run = async (bot, message, args) => {
  const key = `${message.guild.id}-${message.author.id}`;
  // Get a filtered list (for this guild only), and convert to an array while we're at it.
  const filtered = bot.points.filter( p => p.guild === message.guild.id ).array();

  // Sort it to get the top results... well... at the top. Y'know.
  const sorted = filtered.sort((a, b) => b.points - a.points);

  // Slice it, dice it, get the top 10 of it!
  const top10 = sorted.splice(0, 10);

  // Now shake it and show it! (as a nice embed, too!)
  const embed = new Discord.RichEmbed()
    .setTitle("Leaderboard")
    .setAuthor(bot.user.username, bot.user.avatarURL)
    .setDescription("Leaderboard for this server only. Top 10:")
    .setColor(0x00AE86);
  for(const data of top10) {
    embed.addField(bot.users.get(data.user).tag, `${data.points} points, level ${data.level}`);
  }
  return message.channel.send({embed});
}

module.exports.help = {
  name: "leaderboard"
}
