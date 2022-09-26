# MediaFixer

[![Build Status](https://img.shields.io/endpoint.svg?url=https%3A%2F%2Factions-badge.atrox.dev%2FLeviSnoot%2FMediaFixer%2Fbadge%3Fref%3Dmain&style=for-the-badge)](https://actions-badge.atrox.dev/LeviSnoot/MediaFixer/goto?ref=main)

Auto changes links that commonly embed incorrectly (or not at all) on Discord to various embed services, embedding media correctly

## Prerequisites

- Node.js v16.17>
- A discord bot with bot user, Message Content Intent enabled, permissions integer 92160 (Text Permissions: Send Messages, Manage Messages, Embed Links and Read Message History) and bot scope (basically just invite the bot to your server using this link https://discord.com/api/oauth2/authorize?client_id=YOUR_APPLICATION_ID&permissions=92160&scope=bot).

## Deployment

Clone the repo:

	git clone https://github.com/LeviSnoot/MediaFixer.git && cd MediaFixer

Install dependencies:

	npm install 

Edit  `config.json` to include your bot token.

	nano config.json


Deploy by running the following command:

	node .

## Configuration

Edit `config.json`

	nano config.json

The value for `token` must be the bot token found here: https://discord.com/developers/applications/YOUR_APPLICATION_ID/bot

Example:
	
	"token": "Ysy._94ZUE7oATq9DCyaYr47.iQRJGwysWgP7SwpONUen9YbJZpXV_eG_43MjaYESEoI9UpAr",
	
You can set which port the bot runs its http service on using the `port` value. Default is 4000.

Example:
	
	"port": "4000",
	
You can change which service to use for parsing links, simply edit the corresponding values with a service that offers the functionality.

Example:

	"tweetParser": "https://twittpr.com/",
	"instaParser": "https://ddinstagram.com/",
	"tiktokParser": "https://www.vxtiktok.com/"
	
It's important the full base url is in the string, like the example above, otherwise you may run into issues.
