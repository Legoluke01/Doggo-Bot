const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let bicon = bot.user.displayAvatarURL;
  let helpmodEmbed = new Discord.RichEmbed()
    .setDescription("Moderation Command's")
    .setColor("#0800ff")
    .setThumbnail(bicon)
    .setDescription("The commands that have a star next to them are fully done. The ones that do not, are still being tested.")
    .addField("d!ban | ⭐", "d!ban @user reason | Needs a channel called `incidents`.")
    .addField("d!kick | ⭐", "d!kick @user reason | Needs a channel called `incidents`.")
    .addField("d!warn | ⭐", "d!warn @user reason | needs a channel called `warns`.")
    .addField("d!removerole | ⭐", "d!removerole @user RoleHere")
    .addField("d!addrole | ⭐", "d!addrole @user RoleHere")
    .addField("d!purge | ⭐", "d!purge *Number from 2 too 100*")
    //.addField("d!infractions", "d!infractions @user")
    .addField("d!prefix | ⭐", "d!prefix (Desired prefix)")
    .addField("d!tempmute | ⭐", "d!tempmute @user time")
    .setFooter(`Requested by ${message.author.tag}`);

  message.channel.send(helpmodEmbed);

}

module.exports.help = {
  name: "help-mod"
}
