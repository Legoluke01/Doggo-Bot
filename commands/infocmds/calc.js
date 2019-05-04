const math = require('mathjs');
const Discord = require('discord.js');
var fs = require('fs'); //FileSystem

module.exports.run = (bot, message, args) => {

  if (!args[0]) return message.channel.send({
    embed: {
      "description": "Enter some maths, I can't wait to solve it!",
      "color": 0xff2222
    }
  }).then(msg => {
    if (conf[message.guild.id].delete == 'true') {
      msg.delete(conf[message.guild.id].deleteTime);
    }
  });

  let resp;
  try {
    resp = math.eval(args.join(' '));
  } catch (e) {
    return message.channel.send({
      embed: {
        "description": "I-i think I can't do that...",
        "color": 0xff2222
      }
    }).then(msg => {
      if (conf[message.guild.id].delete == 'true') {
        msg.delete(conf[message.guild.id].deleteTime);
      }
    });
  }


  const embed = new Discord.RichEmbed()
    .setColor(0xffffff)
    .setTitle('Result:')
    .addField('Input', `\`\`\`js\n${args.join(' ')}\`\`\``)
    .addField('Output', `\`\`\`js\n${resp}\`\`\``);

  message.channel.send(embed);

}

module.exports.help = {
  name: "calc"
}
