const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let botembed = new Discord.RichEmbed()
     .setDescription("Invite's")
     .setColor("#0800ff")
     .addField("Invite me to your server!", "https://discordapp.com/api/oauth2/authorize?client_id=544714091399217171&permissions=20808982958&scope=bot")
     .addField("Report Problems here.", "https://discord.gg/xrhkZME")


     return message.channel.send(botembed);
}

module.exports.help = {
  name: "invite"
}
