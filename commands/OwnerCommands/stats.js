const Discord = require("discord.js");
const moment = require("moment");
require("moment-duration-format");

module.exports.run = async (bot, message, args, func) => {

    const duration = moment.duration(bot.uptime).format(" D [days], H [hrs], m [mins], s [secs]");
    const uptime = duration
    const mem = (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) + "MB"
    const users = bot.users.size.toLocaleString()
    const servers = bot.guilds.size.toLocaleString()
    const channels = bot.channels.size.toLocaleString()
    const djsV = Discord.version

    const statsEmbed = new Discord.RichEmbed()
    .setTitle(":bar_chart: Bot Stats :bar_chart:")
    .setColor("#FFA500")
    .addField("Memory Usage", `${mem}`)
    .addField("Uptime", `${uptime}`)
    .addField("Total Users", `${users}`)
    .addField("Total Servers", `${servers}`)
    .addField("Total Channels", `${channels}`)
    .addField("Discord.js Version", `v${djsV}`)
    .addField("Node Version", `${process.version}`)
    .setTimestamp()
    .setFooter(`My stats were requested by ${message.author.tag}` )
}


module.exports.help = {
    name: "stats"
}