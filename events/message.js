const prefix = require('../config.json').prefix;

module.exports = {
    name: 'message',
    run: async (client, message) => {

        if (message.author.bot || !message.guild || !message.content.startsWith(prefix)) return;
        const args = message.content.slice(prefix.length).trim().split(/ +/g);
        const cmd = args.shift().toLowerCase();
        let command = client.commands.get(cmd) || client.commands.find(a => a.aliases && a.aliases.includes(cmd));
        if (!command) return message.channel.send(`La commande \`${cmd}\` n'éxiste pas.`);
        command.run(client, message, args);

    },
};