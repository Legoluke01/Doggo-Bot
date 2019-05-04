const Discord = require('discord.js')

const lenny = [
  "1 ⚀",
  "2 ⚁",
  "3 ⚂",
  "4 ⚃",
  "5 ⚄",
  "6 ⚅"
];

module.exports.run = (bot, msg, args) => {

  const DAD = new Discord.RichEmbed()
      .setTitle(lenny[Math.floor(Math.random() * lenny.length)])

      .setColor("0x#FF0000")

      msg.channel.send(DAD);

};


module.exports.help = {
  name: "rolldice"
};
