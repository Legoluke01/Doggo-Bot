const Discord = require("discord.js");
const botconfig = require("../../botconfig.json")

module.exports.run = async (bot, message, args) => { 
  
  function clean(text) {
  if (typeof(text) === "string")
    return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
  else
      return text;
}
  
  if (message.author.id == botconfig.ownerID) {
  const code = args.join(" ");
  try {
      const code = args.join(" ");
      let evaled = eval(code);

      if (typeof evaled !== "string")
        evaled = require("util").inspect(evaled);

      message.channel.send(clean(evaled), {code:"xl"});
    } catch (err) {
      message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
    }
  } else {
    message.channel.send("No, just no.");
  }
};

module.exports.help = {
    name: "eval"
}