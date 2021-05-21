const { Client, Collection } = require('discord.js');
const client = new Client();
const colors = require('colors');
const token = require('./config.json').token;
const { readdirSync } = require('fs');

client.login(token);
client.commands = new Collection();

const commandFile = readdirSync('./cmds');
for (dir of commandFile) {
    const commands = readdirSync(`./cmds/${dir}`).filter(f => f.endsWith('.js'));
    for (command of commands) {
        const cmd = require(`./cmds/${dir}/${command}`);
        if (cmd.name) { client.commands.set(cmd.name, cmd); console.log(`[COMMANDS]`.red + ` > ${cmd.name}` + ` chargé.`.red); } else { continue; };
    }
}

const eventFile = readdirSync('./events');
for (dir of eventFile) {
    const events = readdirSync(`./events/${dir}`).filter(f => f.endsWith('.js'));
    for (let event of events) {
        const e = require(`./events/${dir}/${event}`);
        if (e.name) {
        client.on(e.name, (...args) => e.run(client, ...args));
        console.log(`[EVENTS]`.red + ` > ${e.name}` + ` chargé.`.red);
    } else { continue; };
    }
}