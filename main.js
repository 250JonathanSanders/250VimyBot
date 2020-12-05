const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = 'v!';

const fs = require('fs');

client.commands = new Discord.Collection(); //defines new collection


//all of this hooks up the commands folder to this script.
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
  const command = require(`./commands/${file}`);

  client.commands.set(command.name, command);
}

client.once('ready', () => {
  console.log(`${client.user.tag} is ready!`); //logs into the console obviously
  client.user.setActivity("my officers!", {
    type: "LISTENING"
  });
  
});

//Join role and message
client.on('guildMemberAdd', guildMember =>{
  let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === 'Recruit');
  guildMember.roles.add(welcomeRole);
  console.log(`Gave ${guildMember.user.tag} Recruit role.`);

  const welcomeEmbed = new Discord.MessageEmbed()
    .setColor('#00FFFF')
    .setTitle('Welcome to the 250 Vimy RCACS Discord server!')
    .setThumbnail('https://cdn.discordapp.com/attachments/389124171814141956/783903181599932446/250_PNG.png')
    .setDescription(`Hey <@${guildMember.user.id}>, welcome to **250 Vimy Royal Canadian Air Cadets**! Please answer the following questions!

**1. What is your level?:**
**2. What is your current rank?:**
**3. What is your first and last name?:**

After answering the above questions, please wait to have your roles assigned, and take a look at <#778417731493298207> and <#770779906140405810> in the meantime!`)
  guildMember.guild.channels.cache.get('770782712859590666').send(`<@${guildMember.user.id}>`, welcomeEmbed);
  console.log(`Welcomed ${guildMember.user.tag}`);
});

client.on('message', message => {
  if(!message.content.startsWith(prefix) || message.author.bot) return; //if (not) message content starts with the prefix OR message author is bot, exit function

  const args = message.content.slice(prefix.length).split(/ +/);//add space
  const command = args.shift().toLowerCase();//make command lowercase

  console.log(`${message.author.tag} ran ` + message.content + " in " + message.channel.name + " (" + message.channel + ")");

  if(command === 'info' || command === 'information'){//I think this **** is obvious, even for me lmfao
    client.commands.get('Information').execute(message, args); //execute, not goddamn excecute
  }
});

//Keep as last line and dONT FUCKING PUBLISH ON THE WEB BECAUSE FUCKING SAFETY JIM BOBBY IS GOING TO FUCKING RESET YOUR TOKEN AND YOU'RE GONNA HAVE TO FUCKING COME BACK HERE AND FUCKING FIX IT, ALL BECASUE YOU WANTED SOMEONE TO SEE IT SO YOU SET IT TO PUBLIC. ITS NOT EVEN THAT BIG A DEAL IM JUST TIRED.
client.login('');
