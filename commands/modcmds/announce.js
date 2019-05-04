const Discord = require("discord.js");
const errors = require("../../utils/errors.js");

module.exports.run = async (bot, message, args, func) => {

    if(!message.member.hasPermission("ADMINISTRATOR")) return errors.noPerms(message, "ADMINISTRATOR");

    const announcement = args.join(" ");

    const announcment_channel = message.guild.channels.find(x => x.name === 'announcements');
    if (announcment_channel == null) return message.reply("No announcement channel found! Also make sure you spelled the name correctly. That might be the problem.");

    const announcementEmbed = new Discord.RichEmbed()
    .setTitle("New Announcement!")
    .setDescription(announcement)
    .setTimestamp()
    .setColor("#0000FF")
    .setFooter(`Announcement made by ${message.author.tag}`);

    message.guild.channels.find(x => x.name === 'announcements').send(announcementEmbed);
    message.guild.channels.find(x => x.name === 'announcements').send("@everyone");

}

module.exports.help = {
    name: "announce"
}