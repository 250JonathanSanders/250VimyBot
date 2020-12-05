module.exports = {
  name: 'Information',
  description: "This is a fancy information command",
  execute(message, args){ //executes the following
    const Discord = require('discord.js');

    const infoEmbed = new Discord.MessageEmbed()
      .setColor('#00FFFF')
      .setTitle('250 Vimy Royal Canadian Air Cadets')
      .setThumbnail('https://cdn.discordapp.com/attachments/389124171814141956/783903181599932446/250_PNG.png')
      .setDescription('Bot info for nerds')
      .addFields(
        { name: 'Version:', value: "1.1.1"},
        { name: 'Language', value: "Javascript"}, //not for long, I hate JavaScript, all my homies hate jacvasctipor.
        { name: "Push date", value: "05.12.20"},
        { name: "Github Page", value: "https://github.com/250JonathanSanders/250VimyBot"}
      )
      .setFooter('Bot developed by FSgt Jonathan Sanders')


    if(message.member.permissions.has("ADMINISTRATOR")){
      message.channel.send(infoEmbed);
    }
  }
}
