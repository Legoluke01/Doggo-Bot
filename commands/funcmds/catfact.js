const request = require("request");
const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => { // eslint-disable-line no-unused-vars
  message.channel.startTyping();
  request({ uri: "https://catfact.ninja/fact", json: true }, (error, response, body) => {
    if (error) throw new Error(error);
    message.channel.stopTyping();
    message.channel.send(`🐱 **Did you know?** ${body.fact}`);
  });
};

module.exports.help = {
  name: "catfact"
}
