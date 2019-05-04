const Discord = require("discord.js")
const NekoLife = require("nekos.life")
const neko = new NekoLife();

module.exports.run = async (bot, message, args, func) => {
if (message.author.id != func.ownerID) return message.reply("Not ready yet!")

    const args1 = args.join(" ")
    if (!args1) return message.reply("Tell me something too OwOify! >w<")

let owo = await neko.sfw.OwOify({text: args1});

  message.channel.send(owo);

}

module.exports.help = {
    name: "owoify"
}