const Discord = require("discord.js");
const NekoLife = require('nekos.life');
const neko = new NekoLife();

module.exports.run = async (bot, message, args) => {
  neko.sfw.pat().then(sfw => {
      message.channel.send(`${message.mentions.users.first()}, <@${message.author.id}> gives you some pats.`, { files: [sfw.url] });
  }).catch(err => {
      console.log(err);
  });
}

module.exports.help = {
  name: "pat"
}
