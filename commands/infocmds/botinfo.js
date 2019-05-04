const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let bicon = bot.user.displayAvatarURL;
  let nickname = bot.user.nickname || "no nickname"

      let botembed = new Discord.RichEmbed()
      .setTitle("Bot Information")
      .setColor("#15f153")
      .setThumbnail(bicon)
      .addField("Bot Username", bot.user.tag)
      .addField("Created On", bot.user.createdAt)
      .addField("Server's Im on:", `${bot.guilds.size}`, true)
      .addField("Playing:", `${bot.user.presence.game}`, true)
      .addField("Nickname On this Server:", `${nickname}`, true)
      .addField("ID:", `${bot.user.id}`, true);
      //.addField("My Roles on this server:", `${bot.GuildMember.roles.map(r => r.name).join(', ')}`);

      return message.channel.send(botembed);
}

module.exports.help = {
  name: "botinfo"
}
