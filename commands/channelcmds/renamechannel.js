const Discord = require("discord.js");
const errors = require("../../utils/errors.js");

module.exports.run = async (bot, message, args) => {
 const channelID = args[0]
 const newChannelName = args[1]

 if(!message.member.hasPermission("MANAGE_CHANNELS")) return errors.noPerms(message, "MANAGE_CHANNELS");
 if(!channelID) message.reply("Provide a channel ID for me to rename!")
 if(!newChannelName) message.reply("You did not provide a name!")


 bot.channels.get(channelID).setName(newChannelName)
.then(message.channel.send(`Successfully renamed the channel to ${newChannelName}. (Note: If the emoji is not there then you need to get the unicode version of it.)`
)).catch(err => {
    message.channel.send(err)
})

//
}

module.exports.help = {
  name: "renamechannel"
}
