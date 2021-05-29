const { readdirSync } = require('fs');
const colors = require('colors');

module.exports = (client) => {
    
    const eventFile = readdirSync('./events');
        for (let event of eventFile) {
            const e = require(`../events/${event}`);
            if (e.name) {
            client.on(e.name, (...args) => e.run(client, ...args));
            console.log(`[EVENTS]`.red + ` > ${e.name}` + ` chargé.`.red);
        } else { continue; };
    };

};