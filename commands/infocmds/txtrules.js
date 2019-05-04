const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let bicon = bot.user.displayAvatarURL;
  let botEmbed = new Discord.RichEmbed()
    .setTitle("Rules")
    .setColor("#b70000")
    .setThumbnail(bicon)
    .addField("1. No Spamming", "2. No NSFW. Doing this will result in an imediate ban")
    .addField("3. Discord TOS applies here too.", "4. Respect ALL staff")
    .addField("5. Advertising of any kind is not allowed unless explicitly stated. This includes sending Discord Invites via DMs.", "6. The staff has the final say in all moderation actions. Attempting to argue will result in harsher moderation action.")
    .addField("7. Do not discuss illegal exploit or hacking software and/or processes on our Discord Server.", "8. No Cursing.")
    .addField("9. No duplicated text.", "10. No zalgo text.")
    .addField("11. No alt accounts.", "12. Real world rules aplly here too. Dont ask.")
    .addField("13. Please keep topics in the appropriate channels.", "14. No racism of any kind. This will result in a kick.")
    .addField("15. Use your common sence. Think before you say something.", "15/16. WHERE THE RULES DO NOT PREVAIL, COMMON SENSE DOES.")
    .setFooter("Remeber to Follow the Rules!!!");

    message.channel.send(botEmbed);

  }

module.exports.help = {
  name: "txtrules"
}
