const Discord = require('discord.js'); // si vous voulez require des choses.

module.exports = {
    name: 'exemple', // nom de la commande
    // aliases ['aliase1', 'aliase2 etc'], // si vous voulez mettres des aliases enlever les // au début de cette ligne et vous pouvez mettre vos aliases dans l'array ([])
    run: async (client, message, args) => { // pour exécuter la commande
        message.channel.send('Voici l\'éxemple.'); // on envoie le message
    },
};