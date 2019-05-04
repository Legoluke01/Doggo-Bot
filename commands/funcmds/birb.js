const Discord = require("discord.js");
const request = require("request");

module.exports.run = async (bot, message, args) => { // eslint-disable-line no-unused-vars
  request({ uri: "http://shibe.online/api/birds", json: true }, (error, response, body) => {
    if (error) throw new Error(error);
    message.channel.send({
      files: [{
        attachment: body[0],
        name: "bird.png"
      }]
    });
  });
};

module.exports.help = {
  name: "birb"
}
