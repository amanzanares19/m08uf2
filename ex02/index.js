// Part 1
/* 
const { userInfo } = require('node:os');
const os = require('node:os');

console.log("Sistema operatiu:" + os.version());

console.log("Memoria total:" + os.totalmem());

console.log("Memoria lliure:" + os.freemem());

console.log("Arquitectura CPU:" + os.arch());

console.log("Numero de processadors:" + os.cpus().length);

let arrayObjs = os.cpus();

for (let index = 0; index < os.cpus().length; index++) {
    
    console.log("Nom: " + arrayObjs[index].model + ", nucli " + index);

} 
*/

// Part 2

const Logger = require('logplease');
const logger = Logger.create('utils');
logger.debug(`Hola mon`);
logger.info(`Informació d'ultim moment, Node.js és el millor!!`);
logger.warn(`Surten alertes per tot arreu!`);
logger.error(`Tot falla, error en 3 2 1 ...`);