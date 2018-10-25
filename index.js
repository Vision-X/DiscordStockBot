console.log("____ Bot is running ____");

require('dotenv').load();

// const request = require('request');

//discord stuff
const fs = require('fs');
const TOKEN = process.env.TOKEN;
const accountId = process.env.ACCOUNT_ID;
const Discord = require('discord.js');
const bot = new Discord.Client();
bot.commands = new Discord.Collection();

const commandLib = fs.readdirSync('./commands').filter(f => f.endsWith('.js'));

for (const file of commandLib) {
	const command = require(`./commands/${file}`);
	bot.commands.set(command.name, command);
}
//server stuff
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");


//middleware
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());
app.use(cors());

////////////////////////////////////////////


////////////////////////////////////////////

// bot.on('message', function(message) {
// 	if (message.author == bot.user) {
// 		return
// 	} else {
//   	if (message.content === '!commands') {
//     message.reply("!latest");
//     message.reply("!help");
//     message.reply("!twitter");
//   	}
// 	}
// });
bot.on('message', function(message) {
	const prefix = '!';
	if (!message.content.startsWith(prefix) || message.author.bot) {
		return;
	}
	let args = message.content.slice(prefix.length).split(/ +/);
	let command = args.shift().toLowerCase();
	
	if (!bot.commands.has(command)) return;

	try {
		bot.commands.get(command).execute(message, args);
	}
	catch (error) {
		console.error(error);
		message.reply('there was an error with that command, BRO!');
	}
})



bot.login(TOKEN);


const port = 3000;
app.listen(port, () => {
  console.log('listening on port ', port);
})
