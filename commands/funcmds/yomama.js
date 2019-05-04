const Discord = require("discord.js")
const superagent = require("superagent")
const fs = require("fs")
const jokes = fs.readFileSync("yomamajokes.txt").toString().split("\n");

module.exports.run = async (bot, message, args) => {

  const person = args[0] + ", " || " ";

  message.channel.send(person + jokes[Math.floor(Math.random() * jokes.length)])

}


module.exports.help = {
  name: "yomama"
}