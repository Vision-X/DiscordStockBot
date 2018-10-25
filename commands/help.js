module.exports = {
  name: 'help',
  execute(message, args) {
    message.channel.send("*** Help? ***  \n Nothing useful right now " + message.author.username + ", come back later!")
  }
};
