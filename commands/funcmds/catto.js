const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot, message, args) => {
  let {body} = await superagent
  .get(`http://aws.random.cat/meow`)
  if(!body) return message.channel.send("Couldn't get the picture. Please try again.");

  let catembed = new Discord.RichEmbed()
  .setColor("#ff9900")
  .setTitle("Catto :cat:")
  .setImage(body.file)
  .setFooter(`Requested by ${message.author.tag}`);

  message.channel.send(catembed);

}

module.exports.help = {
  name: "catto"
}
