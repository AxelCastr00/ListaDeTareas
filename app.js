require('colors');
require('./helpers/mensajes');

const { mostrarMenu, stop} = require('./helpers/mensajes');

console.clear();

const main = async () => { 
  console.log('Hola mundo');
  mostrarMenu();
  stop();

}
main();