const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let sicon = message.guild.iconURL;
        let serverembed = new Discord.RichEmbed()
        .setTitle("Server Information")
        .setColor("#15f153")
        .setThumbnail(sicon)
        .addField("Server Name", message.guild.name)
        .addField("Created On", message.guild.createdAt)
        .addField("Currently Online:", `${message.guild.members.filter(o => o.presence.status === 'online').size}`, true)
        .addField("Currently Offline:", `${message.guild.members.filter(a => a.presence.status === 'offline').size}`, true)
        .addField("Currently Idle", `${message.guild.members.filter(i => i.presence.status === 'idle').size}`, true)
        .addField("Total Members", `${message.guild.members.filter(member => !member.user.bot).size}`, true)
        .addField("Total Bots:", `${message.guild.members.filter(member => member.user.bot).size}`, true)
        .addField("Owner:", `${message.guild.owner.user}`, true);

        return message.channel.send(serverembed);
}

module.exports.help = {
  name: "serverinfo"
}
