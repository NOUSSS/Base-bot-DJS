module.exports = {

    name: 'ping',

    run: async (client, message, args) => {

        message.channel.send(`PING --> ${client.ws.ping} MS!`);
        
    }    
}