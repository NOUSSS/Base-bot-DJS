const prefix = require('../../config.json').prefix;

module.exports = {
    name: 'message',
    run: async (client, message) => {

        if (message.author.bot || !message.guild || !message.content.startsWith(prefix)) return;
        const args = message.content.slice(prefix.length).split(/ + /g);
        const cmd = args.shift().toLocaleLowerCase();
        const command = client.commands.get(cmd) || client.commands.find(command => command.aliases && command.aliases.includes(cmd));
        if (!command) return message.channel.send('Cette commande n\'éxiste pas.');
        else { command.run(client, message, args); };

    }
}