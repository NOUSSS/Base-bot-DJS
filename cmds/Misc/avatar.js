module.exports = {
    
    name: 'avatar', 
    aliases: ['pp'],

    run: async (client, message, args) => {

        message.channel.send(`Voici votre avatar ${message.author.tag} --> ${message.author.displayAvatarURL({ dynamic : true, size : 4096 })}`);

    }
}