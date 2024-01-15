const Discord = require('discord.js')
const client = new Discord.Client()

const config = require('./config.json')
const memberCount = require('./member-count')

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
  console.log('The client is ready!')
  client.user.setActivity(`statistics...`, { type: 'WATCHING' });
  memberCount(client)
})

client.login(config.token)
