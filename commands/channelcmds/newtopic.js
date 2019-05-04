const Discord = require("discord.js");
const errors = require("../../utils/errors.js");

module.exports.run = async (bot, message, args) => {
 const channelID = args[0]
 const newChannelTopic = args.slice(1).join(" ")

 if(!message.member.hasPermission("MANAGE_CHANNELS")) return errors.noPerms(message, "MANAGE_CHANNELS");
 if(!channelID) message.reply("Provide a channel ID for me to rename!")
 if(!newChannelTopic) message.reply("You did not provide a Topic!")

 bot.channels.get(channelID).setTopic(newChannelTopic)
.then(message.channel.send(` I successfully put a new topic to the channel`
)).catch(err => {
    message.channel.send(err)
})

}

module.exports.help = {
  name: "newtopic"
}
