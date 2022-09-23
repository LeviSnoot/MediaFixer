// Require the necessary discord.js classes
const { Client, GatewayIntentBits } = require('discord.js');
const { token, tweetParser } = require('./config.json');
const http = require('http');
// Create a new client instance
const client = new Client({
        intents: [
                GatewayIntentBits.Guilds,
                GatewayIntentBits.GuildMessages,
                GatewayIntentBits.MessageContent,
        ],
});

http.createServer((req, res) => {
        res.writeHead(200, { 'Content-type': 'text/plain' });
        res.write('Hey');
        res.end();
}).listen(4000);

// When the client is ready, run this code (only once)
client.once('ready', () => {
        console.log('Ready!');
});

// Response
client.on('messageCreate', async message => {
        if (message.content.startsWith('https://twitter.com/')) {
                const tweetURL = message.content.substring(20, message.content.length);
                message.suppressEmbeds(true);

                const newmsg = tweetParser + tweetURL;
                message.reply({ content: newmsg, allowedMentions: { repliedUser: false } });
        }
});
// Login to Discord with your client's token
client.login(token);
