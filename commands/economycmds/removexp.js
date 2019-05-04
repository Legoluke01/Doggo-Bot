const Discord = require("discord.js");
const Enmap = require("enmap")

module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("In order to use this command you must have the **ADMINISTRATOR** permission.");

    const user = message.mentions.users.first() || bot.users.get(args[0]);
    if(!user) return message.reply("You must mention someone or give their ID!");

    const pointsToTakeAway = parseInt(args[1], 10);
    if(!pointsToTakeAway)
      return message.reply("You didn't tell me how many points to take away...")

    bot.points.ensure(`${message.guild.id}-${user.id}`, {
      user: message.author.id,
      guild: message.guild.id,
      points: 0,
      level: 1
    });

    let userPoints = bot.points.get(`${message.guild.id}-${user.id}`, "points");
    userPoints -= pointsToTakeAway;


    bot.points.set(`${message.guild.id}-${user.id}`, userPoints, "points")

    message.channel.send(`${user.tag} has been removed ${pointsToTakeAway} points and now has ${userPoints} xp.`).catch(err => {
        console.log(err);
    });
}

module.exports.help = {
  name: "removexp"
}
