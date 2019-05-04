const botconfig = require("./botconfig.json");
const tokenfile = require("./token.json");
const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client();
bot.commands = new Discord.Collection();
let coins = require("./coins.json");
let xp = require("./xp.json");
let purple = botconfig.purple;
let cooldown = new Set();
let cdseconds = 5;
const ms = require('ms');
const request = require("request");
const NekoLife = require('nekos.life');
const neko = new NekoLife();
const Enmap = require("enmap");
bot.points = new Enmap({name: "points"});
const Logging = require('./logging.js');
bot.coins = new Enmap({name: "coins"});

fs.readdir("./commands/", (err, files) => {
  let folders = fs.readdirSync('./commands/');
  for(const folder of folders){
    let files = fs.readdirSync(`./commands/${folder}/`);
    for(const file of files){
      bot.commands.set(file.split('.').shift(), require(`./commands/${folder}/${file}`));
    }
  }
 
  if(err) console.log(err.catch());
});

bot.on("ready", async () => {

  console.log(`${bot.user.username} is online on ${bot.guilds.size} servers!`);
  bot.user.setActivity(" Use d!help for commands.", {type: "PLAYING"});

});


bot.on("message", async message => {


  let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));
  if(!prefixes[message.guild.id]){
    prefixes[message.guild.id] = {
      prefixes: botconfig.prefix
    };
  }


  if(message.channel.type === "dm") return;
  if(message.author.bot) return;

  if (message.guild) {
      
      const key = `${message.guild.id}-${message.author.id}`;

      
      bot.points.ensure(`${message.guild.id}-${message.author.id}`, {
        user: message.author.id,
        guild: message.guild.id,
        points: 0,
        level: 1
      });

      bot.points.inc(key, "points");

      // Calculate the user's current level
      const curLevel = Math.floor(0.1 * Math.sqrt(bot.points.get(key, "points")));

      // Act upon level up by sending a message and updating the user's level in enmap.
      if (bot.points.get(key, "level") < curLevel) {
        message.reply(`You've leveled up to level **${curLevel}**!`);
        bot.points.set(key, curLevel, "level");
      }
    }

  
    if (message.content == "ping") {
      return message.channel.send("pong");
    }
    if (message.content == "Hello") {
      return message.channel.send("Hey how you doing?");
    }
    if (message.content == "Good") {
      return message.channel.send("Thats good.");
    }
    if (message.content == "Good and you?") {
      return message.channel.send("Im good. Thanks for asking!");
    }
    if (message.content == "So how has your day been?") {
      return message.channel.send("Its been good. What about yours?");
    }
    if (message.content == "My day has been good too.") {
      return message.channel.send("Thats good.");
    }


  if(!coins[message.author.id]){
    coins[message.author.id] = {
      coins: 0
    };
  }

  let coinAmt = Math.floor(Math.random() * 15) + 1;
  let baseAmt = Math.floor(Math.random() * 15) + 1;
  console.log(`${coinAmt} ; ${baseAmt}`);

  if(coinAmt === baseAmt){
    coins[message.author.id] = {
      coins: coins[message.author.id].coins + coinAmt
    };
  fs.writeFile("./coins.json", JSON.stringify(coins), (err) => {
    if (err) console.log(err)
  });
  let coinEmbed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("#0000FF")
  .addField("💸", `${coinAmt} coins added!`);

  message.channel.send(coinEmbed).then(msg => {msg.delete(5000)});
  }

  let prefix = prefixes[message.guild.id].prefixes;
  if(!message.content.startsWith(prefix)) return;
  if(cooldown.has(message.author.id)){
    message.delete();
    return message.reply("You have to wait 5 seconds between commands.")
  }
  if(!message.member.hasPermission("ADMINISTRATOR")){
    cooldown.add(message.author.id);
  }


  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
  let func = require("./botconfig.json")

  let commandfile = bot.commands.get(cmd.slice(prefix.length));
  if(commandfile) commandfile.run(bot, message, args, func);

  setTimeout(() => {
    cooldown.delete(message.author.id)
  }, cdseconds * 1000)

});

bot.on('messageDelete', message => {
Logging.logMessageDelete(message);
});

bot.on('messageUpdate', (oldMessage, newMessage) => {
Logging.logMessageUpdate(oldMessage, newMessage);
});

bot.login(tokenfile.token);
