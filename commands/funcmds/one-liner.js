const Discord = require("discord.js")
const superagent = require("superagent")
const fs = require("fs")
const one_liners = fs.readFileSync("one-liners.txt").toString().split("\n");

module.exports.run = async (bot, message, args) => {

  const joke = one_liners[Math.floor(Math.random() * one_liners.length)];

  const jokeEmbed = new Discord.RichEmbed()
  .setTitle(joke)
  .setColor("RANDOM")
  .setTimestamp()
  .setFooter(`One-liner requested by ${message.author.tag}`)

  message.channel.send(jokeEmbed)

}


module.exports.help = {
  name: "one-liner"
}