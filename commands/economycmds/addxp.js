const Discord = require("discord.js");
const Enmap = require("enmap")

module.exports.run = async (bot, message, args) => {
// Limited to guild owner - adjust to your own preference!
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("In order to use this command you must have the **ADMINISTRATOR** permission.");

    const user = message.mentions.users.first() || bot.users.get(args[0]);
    if(!user) return message.reply("You must mention someone or give their user ID!");

    const pointsToAdd = parseInt(args[1], 10);
    if(!pointsToAdd)
      return message.reply("You didn't tell me how much xp to give...")

    // Ensure there is a points entry for this user.
    bot.points.ensure(`${message.guild.id}-${user.id}`, {
      user: message.author.id,
      guild: message.guild.id,
      points: 0,
      level: 1
    });

    // Get their current points.
    let userPoints = bot.points.get(`${message.guild.id}-${user.id}`, "points");
    userPoints += pointsToAdd;


    // And we save it!
    bot.points.set(`${message.guild.id}-${user.id}`, userPoints, "points")

    message.channel.send(`${user.tag} has received ${pointsToAdd} xp and now has ${userPoints} xp.`).catch(err => {
        console.log(err);
    });
}

module.exports.help = {
  name: "addxp"
}
