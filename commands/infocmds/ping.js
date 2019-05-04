const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  const m = await message.channel.send("Ping?");

    const embed = new Discord.RichEmbed()
     .setTitle("Pong!")
     .setColor("RANDOM")
     .setDescription(`Latency is ${m.createdTimestamp - message.createdTimestamp}ms.`)
     .addField(`API Latency is ${Math.round(bot.ping)}ms`, `Ping requested by ${message.author.tag}.`);

    m.edit(embed);
}

module.exports.help = {
    name: "ping"
}