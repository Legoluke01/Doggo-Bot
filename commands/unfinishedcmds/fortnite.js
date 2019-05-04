const Discord = require("discord.js");
const config = require("../../botconfig.json");
const apikey = require("../../fortnite.json");
const Fortnite = require("fortnite");
const ft = new Fortnite(apikey.token)

module.exports.run = async (bot, message, args) => {
  
  let username = args[0];
  let platform = args[1] || "pc";

  let data = ft.getInfo(username, platform).then(data => {

    console.log(data);

  }).catch(e => {
    console.log(e);
    message.channel.send("Couldn't find that user in the database.");
  })


}

module.exports.help = {
  name: "fortnite"
}