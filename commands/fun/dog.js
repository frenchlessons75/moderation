const superagent = require("snekfetch");
const Discord = require('discord.js')

exports.run = async (client, message, args, level) => {
    if (!message.channel.nsfw) return message.channel.send('You can use this command in an NSFW Channel!')
    superagent.get('https://nekos.life/api/v2/img/woof')
        .end((err, response) => {
      const lewdembed = new Discord.RichEmbed()
      .setTitle("Random dog")
      .setImage(response.body.url)
      .setColor(`#000000`)
      .setFooter(`woof`)
      .setURL(response.body.url);
  message.channel.send(lewdembed);
    })
	
}