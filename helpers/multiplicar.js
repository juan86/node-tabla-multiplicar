const fs = require('fs');
const colors = require('colors');

const crearArchivo = async( {base, listar, hasta} ) =>{
    
    
    let salida = '';
    let consola = '';
    
    for(let i=1; i < (hasta + 1); i++ ){
        salida += `${base} X ${i} = ${base * i}\n`;
        consola += `${base} ${'X'.green} ${i} ${'='.green} ${base * i}\n`;
    }
    
    if (listar) {
        console.log('========================='.green);
        console.log(`   Tabla del: ${colors.blue(base)}`.green);
        console.log('========================='.green);
        console.log(consola);
    }
    
    try {
    
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        return `tabla-${base}.txt`;
    
    } catch (error) {
    
        throw error;
    
    }

};

module.exports = {
    crearArchivo
};