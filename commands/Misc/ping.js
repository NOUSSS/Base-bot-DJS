module.exports = {
    name: 'ping',
    aliases: ['pong'],
    run: async (client, message, args) => {
        message.channel.send(client.ws.ping + ' MS!');
    }
}