const Discord = require('discord.js')

const lenny = [
  "( ͡ ͜ʖ ͡ )",
  "( ͡~ ͜ʖ ͡°)",
  "( ͡ʘ╭͜ʖ╮͡ʘ)",
  "( ͡☉ ͜ʖ ͡☉)",
  "( ͡⚆ ͜ʖ ͡⚆)",
  "( ͡~ ͜ʖ ͡~)",
  "( ͡ຈ ͜ʖ ͡ຈ)",
  "( ͡° ʖ̯ ͡°)",
  "( ͡ಠ ʖ̯ ͡ಠ)",
  "( ͠° ͟ʖ ͡°)",
  "( ͡° ͜ʖ ͡°)",
  "( ͡°╭͜ʖ╮͡° )",
  "( ͡^ ͜ʖ ͡^ )",
  "( ͡ຈ╭͜ʖ╮͡ຈ )",
  "( ͡ᵔ ͜ʖ ͡ᵔ )",
  "( ͝סּ ͜ʖ͡סּ)",
  "ヽ( ͝° ͜ʖ͡°)ﾉ",
  "(ง ° ͜ ʖ °)ง",
  "(つ ͡° ͜ʖ ͡°)つ",
  "(☞ ͡° ͜ʖ ͡°)☞",
  "ᕦ( ͡° ͜ʖ ͡°)ᕤ",
  "ᕕ( ͡° ͜ʖ ͡°)ᕗ",
  "( ʘ̆ ╭͜ʖ╮ ʘ̆ )",
  "( ͡° ͜ʖ ͡°)=ε✄",
  "╚═( ͡° ͜ʖ ͡°)═╝",
  "┴┬┴┤( ͡° ͜ʖ├┬┴┬",
  "(ノ͡° ͜ʖ ͡°)ノ︵┻┻",
  "¯\_( ͠° ͟ʖ °͠ )_/¯",
  "╰( ͡° ͜ʖ ͡° )つ──☆*:・ﾟ",
  "(∩ ͡ ° ʖ ͡ °) ⊃-(===>"
];

module.exports.run = async (bot, msg, args) => {

  const DAD = new Discord.RichEmbed()
      .setDescription(lenny[Math.floor(Math.random() * lenny.length)])

      .setColor("0x#FF0000")

      msg.channel.send(DAD);

};


exports.help = {
  name: "lenny"
};
