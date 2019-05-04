const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let bicon = bot.user.displayAvatarURL;
  let botEmbed = new Discord.RichEmbed()
     .setTitle("Command's")
     .setColor("#0800ff")
     .setThumbnail(bicon)
     .addField("All the Information you need is here", "[Click Me](https://sites.google.com/view/doggobot/home)")
     .addField("d!help-mod", "Mod Commands. Infractions command does not work.")
     .setFooter(`Requested by ${message.author.tag}.`);

   message.channel.send(botEmbed);
}

module.exports.help = {
  name: "help"
}
