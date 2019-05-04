const Disocrd = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot, message, args) => {

  let {body} = await superagent
  .get(`https://random.dog/woof.json`);

  let dogembed = new Disocrd.RichEmbed()
  .setColor("#ff9900")
  .setTitle("Doggo :dog:")
  .setImage(body.url)
  .setFooter(`Requested by ${message.author.tag}`);

  message.channel.send(dogembed);

}

module.exports.help = {
  name: "doggo"
}
