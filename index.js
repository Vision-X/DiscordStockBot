console.log("____ Bot is running ____");

const env = require('dotenv').load();

// const fs = require('fs');
// const request = require('request');

//discord stuff
const Discord = require('discord.js');
const bot = new Discord.Client();
const TOKEN = process.env.TOKEN;
const accountId = process.env.ACCOUNT_ID;

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

bot.on('message', function(message) {
  if (message.content === '!commands') {
    message.reply("!latest");
    message.reply("!help");
    message.reply("!twitter");
  }
});

bot.on('message', function(m) {
  if (m.content === '!latest') {
    m.reply("*** Latest Trending Stocks... ***  \n 1) DVLP - 253.62 USD \n 2) SMDB - 1,200.33 USD");
  }
})



bot.login(TOKEN);


const port = 3000;
app.listen(port, () => {
  console.log('listening on port ', port);
})
