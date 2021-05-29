module.exports = {
    name: 'ready',
    run : async (client) => {

        console.clear();
        console.log(`[CLIENT]`.red + ` Connecté sur > ` + `${client.user.tag} (${client.user.id})`.red);
        client.user.setActivity('PRESENCE');
        
    },
};