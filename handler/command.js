const { readdirSync } = require('fs');
const colors = require('colors');

module.exports = (client) => {
    const commandFile = readdirSync('./commands');
    for (dir of commandFile) {
        const commands = readdirSync(`./commands/${dir}`).filter(f => f.endsWith('.js'));
        for (command of commands) {
            const cmd = require(`../commands/${dir}/${command}`);
            if (cmd.name) { client.commands.set(cmd.name, cmd); console.log(`[COMMANDS]`.red + ` > ${cmd.name}` + ` chargé.`.red); } else { continue; };
        }
    } 
};