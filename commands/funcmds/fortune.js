const request = require("request");

module.exports.run = async (bot, message, args) => { // eslint-disable-line no-unused-vars
  message.channel.startTyping();
  request({ uri: "http://www.yerkee.com/api/fortune", json: true }, (error, response, body) => {
    if (error) throw new Error(error);
    message.channel.stopTyping();
    message.channel.send(body.fortune);
  });
};

module.exports.help = {
  name: "fortune"
}
