const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  const random = ['Yes','No doubt about it','Try again later','signs point to yes','I say no','No chance','Dont think so'];
   message.channel.sendMessage(random[Math.floor(Math.random () * random.length)]);
  }

  module.exports.help = {
    name: "8ball"
  }
