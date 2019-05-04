const Discord = require("discord.js");
var fs = require('fs'); //FileSystem
const urban = require("urban");

module.exports.run = (client, message, args) => { //Collecting info about command
  if (!message.channel.nsfw) return message.reply(":x: | You may not do that command here. Go to a NSFW channel for this command.");

  urban.random().first(json => {

    if (!json) return message.channel.send({
      embed: {
        "description": "Nothing found :sweat: ",
        "color": 0xFF2222
      }
    });

    let embed = new Discord.RichEmbed()
      .setColor(0x42f4cb)
      .setDescription(json.definition)
      .addField('Example', json.example)
      .addField(`Upvotes`, json.thumbs_up, true)
      .addField(`Downvotes`, json.thumbs_down, true)
      .setFooter(`Written by ${json.author}`)
      .setTitle(json.word);

    message.channel.send(embed);

  });

}

module.exports.help = {
  name: "randomurban"
}
