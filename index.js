const {
    Client,
    GatewayIntentBits
} = require('discord.js');
const {
    token,
    port,
    tweetParser,
    instaParser,
    tiktokParser
} = require('./config.json');
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
    res.writeHead(200, {
        'Content-type': 'text/plain'
    });
    res.write('Hey');
    res.end();
}).listen(port);
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
        message.reply({
            content: newmsg,
            allowedMentions: {
                repliedUser: false
            }
        });
    }
});
client.on('messageCreate', async message => {
    if (message.content.startsWith('https://mobile.twitter.com/')) {
        const mobiletweetURL = message.content.substring(27, message.content.length);
        message.suppressEmbeds(true);
        const newmsg = tweetParser + mobiletweetURL;
        message.reply({
            content: newmsg,
            allowedMentions: {
                repliedUser: false
            }
        });
    }
});
client.on('messageCreate', async message => {
    if (message.content.startsWith('https://instagram.com/')) {
        const instaURL = message.content.substring(22, message.content.length);
        message.suppressEmbeds(true);
        const newmsg = instaParser + instaURL;
        message.reply({
            content: newmsg,
            allowedMentions: {
                repliedUser: false
            }
        });
    }
});
client.on('messageCreate', async message => {
    if (message.content.startsWith('https://www.instagram.com/')) {
        const instaURL2 = message.content.substring(26, message.content.length);
        message.suppressEmbeds(true);
        const newmsg = instaParser + instaURL2;
        message.reply({
            content: newmsg,
            allowedMentions: {
                repliedUser: false
            }
        });
    }
});
client.on('messageCreate', async message => {
    if (message.content.startsWith('https://tiktok.com/')) {
        const tiktokURL = message.content.substring(19, message.content.length);
        message.suppressEmbeds(true);
        const newmsg = tiktokParser + tiktokURL;
        message.reply({
            content: newmsg,
            allowedMentions: {
                repliedUser: false
            }
        });
    }
});
client.on('messageCreate', async message => {
    if (message.content.startsWith('https://www.tiktok.com/')) {
        const tiktokURL2 = message.content.substring(23, message.content.length);
        message.suppressEmbeds(true);
        const newmsg = tiktokParser + tiktokURL2;
        message.reply({
            content: newmsg,
            allowedMentions: {
                repliedUser: false
            }
        });
    }
});
// Login to Discord with your client's token
client.login(token);