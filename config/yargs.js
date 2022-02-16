const argv = require('yargs')
                .option('b', {
                    alias: 'base',
                    type: 'number',
                    demandOption: true,
                    describe: 'Toma la Base de la tabla de Multiplicar'
                })
                .option('l', {
                    alias: 'listar',
                    type: 'boolean',
                    default: false,
                    describe: 'Muestra la tabla en consola'
                })
                .option('h', {
                    alias: 'hasta',
                    type: 'number',
                    default: 10,
                    describe: 'Numero hasta donde listar'
                })
                .check( (argv, option) =>{
                    if ( isNaN( argv.b) ){
                        throw 'La base tiene que ser un número';
                    }
                    return true;
                })
                .argv;

module.exports = argv;