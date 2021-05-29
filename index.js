const { Client, Collection } = require('discord.js');

const client = new Client({ 
    partials: ['GUILD_MEMBER', 'CHANNEL', 'MESSAGE', 'REACTION', 'USER'],
});

const token = require('./config.json').token;

client.login(token);
client.commands = new Collection();

['command', 'event'].forEach(handler => {
    require(`./handler/${handler}`)(client);
});