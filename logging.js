const Discord = require("discord.js");

module.exports = {
    logUserBan: function(user, guild) {
      const channel = this.getLoggingChannel(guild);
      const banEmbed = new Discord.RichEmbed()
      .setTitle(":skull: User Banned :skull:")
      .addField("User Tag:", `${user.tag}`)
      .addField("User ID:", `${user.id}`)
      .addField("Reason:", "Unknown")
      .setTimestamp();
      channel.send(`:skull: **User Banned** :skull:
                                         \n**User**: ${user.username}`);
    },
  
    logMessageDelete: function(message) {
      const channel = this.getLoggingChannel(message.guild);

      let deleteembed = new Discord.RichEmbed()
      .setTitle(":x: Message Deleted :x:")
      .setColor("#FF0000")
      .addField("User:", `${message.author.tag}`, true)
      .addField("User ID", `${message.author.id}`, true)
      .addField("Message:", `${message.content}`, true)
      .setTimestamp(".");

      channel.send(deleteembed);
    },
  
    logMessageUpdate: function(oldMessage, newMessage) {
      const channel = this.getLoggingChannel(oldMessage.guild);

      let editembed = new Discord.RichEmbed()
      .setTitle(":pencil2: Message Updated :pencil2:")
      .setColor("#FFFF00")
      .addField("User:", `${newMessage.author.tag}`, true)
      .addField("User ID", `${newMessage.author.id}`, true)
      .addField("Old Message:", `${oldMessage.content}`, true)
      .addField("New Message:", `${newMessage.content}`, true)
      .setTimestamp(".");

      channel.send(editembed);
    },
  
    getLoggingChannel: function(guild) {
      var loggingChannel = guild.channels.find(x => x.name === 'doggo-logs');
  
      if (loggingChannel == null) {
        var plebRoles = guild.roles.filter(x => x.hasPermission('MANAGE_MESSAGES'));
        var roleArray = [];
        for (var role of plebRoles) {
          var override = {
            id: role[0],
            type: 'role',
            allow: 1024,
            deny: 2048,
          };
          roleArray.push(override);
        }
        roleArray.push({
          id: guild.id,
          type: 'role',
          deny: 3072,
        });
  
        console.log(roleArray);
        guild
          .createChannel('doggo-logs', 'text', roleArray)
          .then(newChannel => (loggingChannel = newChannel))
          .catch(console.error);
      }
      return loggingChannel;
    },
  };