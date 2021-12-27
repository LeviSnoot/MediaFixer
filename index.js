const mySecret = process.env['TOKEN']
// Require the necessary discord.js classes
const { Client, Intents } = require('discord.js');
require('discord-reply'); // IMPORTANT: put this before your discord.Client()
// Create a new client instance
const client = new Client({ 
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES
  ]
  });

// When the client is ready, run this code (only once)
client.once('ready', () => {
	console.log('Ready!');
      console.log()
});

// Response
client.on('messageCreate', async message => {
    if (message.content.startsWith("https://twitter.com/")) {
      var tweetURL = message.content.substring(20, message.content.length);
      message.delete();

      var newmsg = "https://fxtwitter.com/" + tweetURL;
      message.channel.send(newmsg);
    }
});

// Login to Discord with your client's token
//client.login(process.env.TOKEN);
client.login(mySecret);
