const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if(message.author.id != "317098359116529666") return message.reply("This is for my owner only! :angry:");

    const embed = new Discord.RichEmbed()
    .setTitle("Owner Commands")
    .addField("d!eval", "d!eval (code here.) | Evaluates code.");

    message.channel.send(embed);

};

module.exports.help = {
    name: "help-owner"
}
