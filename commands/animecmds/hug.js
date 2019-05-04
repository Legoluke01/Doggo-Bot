const Discord = require("discord.js");
const NekoLife = require('nekos.life');
const neko = new NekoLife();

module.exports.run = async (bot, message, args) => {
    neko.sfw.hug().then(sfw => {
        message.channel.send(`${message.mentions.users.first()}, <@${message.author.id}> hugs you...`, { files: [sfw.url] });
    }).catch(err => {
        console.log(err);
    });
}
// return message.channel.send("Command is not ready yet!");

module.exports.help = {
    name: "hug"
}
