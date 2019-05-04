const Discord = require('discord.js');

module.exports.run = (bot, message, args) => {

  let memberInfo = message.mentions.members.first() || message.member;
  var nickname = memberInfo.nickname || "no nickname"
  const status = {
        online: "Online",
        idle: "Idle",
        dnd: "Do Not Disturb",
        offline: "Offline/Invisible"
      }


    const userinfo = new Discord.RichEmbed()
        .setTitle("-----User info----- ")
        .setColor("#00ff26")
        .addField(`Full Username:`, `${memberInfo.user.tag}`, true)
        .addField("Nickname:", `${nickname}`, true)
        .addField(`User ID:`, `${memberInfo.id}`, true)
        .addField("Status:", `${status[memberInfo.user.presence.status]}`, true)
        .addField("Playing", `${memberInfo.user.presence.game}`, true)
        .addField(`${memberInfo.user.username} made his/her account at:`, `${memberInfo.user.createdAt}`, true)
        .addField(`${memberInfo.user.username} Joined at`, `${memberInfo.joinedAt}`)
        .addField(`Roles:`, `${memberInfo.roles.map(r => r.name).join(', ')}`, true)
        .setThumbnail(memberInfo.user.avatarURL)
        .setFooter(`Userinfo requested by ${message.author.tag}`);

        message.channel.send(userinfo);
  }


module.exports.help = {
  name: "userinfo"
};
