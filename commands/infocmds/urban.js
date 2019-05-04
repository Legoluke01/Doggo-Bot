var fs = require('fs'); //FileSystem
const Discord = require('discord.js');
const urban = require('urban');

module.exports.run = async (client, message, args) => {
  if (!message.channel.nsfw) return message.reply(":x: | You may not do that command here. Go to a NSFW channel for this command.");
  urban(args).first(json => {

    if (!json) return message.channel.send({
      embed: {
        "description": "Nothing found :sweat: ",
        "color": 0xFF2222
      }
    });

    let embed = new Discord.RichEmbed()
      .setColor(0x56aaff)
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
  name: "urban"
}
