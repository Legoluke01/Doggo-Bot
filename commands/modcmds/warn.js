const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");
let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));

module.exports.run = async (bot, message, args) => {

  //d!warn @player <reason>
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("You are too weak for this kind of sorcery.");
  let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
  if(!wUser) return message.reply("I couldn't find them.");
  if(wUser.hasPermission("MANAGE_MESSAGES")) return message.reply("Look at his/her perms and you will know why this does not work for them.");
  let reason = args.join(" ").slice(22);

  if(!warns[wUser.id]) warns[wUser.id] = {
    warns: 0
  };

  warns[wUser.id].warns++;

  fs.writeFile("./warnings.json", JSON.stringify(warns), (err) => {
    if (err) console.log(err);
  });

  let warnEmbed = new Discord.RichEmbed()
  .setTitle("Warn")
  .setColor("#ff0000")
  .addField("Warned User", `<@${wUser.id}>`)
  .addField("Warned In", message.channel)
  .addField("Number of Warnings", warns[wUser.id].warns)
  .addField("Time", message.createdAt)
  .addField("Reason", reason)
  .setFooter(`Warned by ${message.author.tag}`);

  let warnchannel = message.guild.channels.find(`name`, "warns");
  if(!warnchannel) return message.reply("If you want this command to work please get a channel named warns with no capital letters or emojis in the name.");

  warnchannel.send(warnEmbed);

  if(warns[wUser.id].warns == 3){
    let muterole = message.guild.roles.find(`name`, "muted");
    if(!muterole) return message.reply("Create a role named muted with only the view messages perm so I can add it to them!");

    let mutetime = "30m";
    await(wUser.addRole(muterole.id));
    message.reply(`<@${wUser.id}> has been temporarily muted.`);

    setTimeout(function(){
      wUser.removeRole(muterole.id)
      message.reply(`${wUser.tag} has been unmuted.`)
    }, ms(mutetime));
  }
  if(warns[wUser.id].warns == 8){
    message.guild.member(wUser).kick(reason);
    message.reply(`<@${wUser.id}> has been kicked for having 8 infractions/warns.`)
  }

}

module.exports.help = {
  name: "warn"
}
