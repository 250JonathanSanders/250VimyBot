module.exports = {
     name: 'ServerInfo',
     description: "Will be updated in version 2",
     execute(message, args){ //executes the following
       const guild = client.guilds.cache.get("770775813028053003");

//       let officers = guild.roles.get(770775964304801805).members.size
//       let cadets = guild.roles.get(770775968913817600).members.size + guild.roles.get(770775968231063562).members.size + guild.roles.get(770775967132024864).members.size + guild.roles.get(770775966573395991).members.size + guild.roles.get(770775966041112597).members.size

       const infoEmbed = new Discord.MessageEmbed()
         .setColor('#00FFFF')
         .setTitle('250 Vimy Royal Canadian Air Cadets Discord Server')
         .setThumbnail('https://cdn.discordapp.com/attachments/389124171814141956/783903181599932446/250_PNG.png')
         .setDescription('Server Information')
         .addFields(
//            { name: 'Number of officers', value: `${officers} Officers`},
//            { name: 'Number of cadets:', value: `${cadets} Cadets`},
//            { name: 'Level ones:', value: `${guild.roles.get(770775968913817600).members.size} Level ones`},
//            { name: 'Level twos:', value: `${guild.roles.get(770775968231063562).members.size} Level twos`},
//            { name: 'Level threes:', value: `${guild.roles.get(770775967132024864).members.size} Level threes`},
//            { name: 'Level fours:', value: `${guild.roles.get(770775966573395991).members.size} Level fours`},
//            { name: 'Level fives:', value: `${guild.roles.get(770775966041112597).members.size} Level fives`},
            { name: "Permenant Server Invite Link", value: "https://discord.gg/KkRWgZSynW"}
         )
         .setFooter('Bot developed by FSgt Jonathan Sanders')
       if(message.member.permissions.has("ADMINISTRATOR")){
         message.channel.send(infoEmbed);
       }
     }
   }