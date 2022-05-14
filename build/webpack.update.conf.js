// const webpack =  require('webpack');
const path = require('path');
let fs = require('fs');


const PATHS = {
    src: path.join( __dirname, '../src'),
    dist: path.join( __dirname, '../dist'), 
    assets: 'assets/' 
};

fs.copyFile( `${PATHS.src}/proba.txt`, `${PATHS.src}/proba2.txt`, err => {
    if(err) throw err; // не удалось скопировать файл
    console.log('Файл успешно скопирован');
});

// module.exports = {

//     mode: 'production',
//     plugins: [
//         fs.copyFile( `${PATHS.src}/proba.txt`, `${PATHS.src}/proba2.txt`, err => {
//             if(err) throw err; // не удалось скопировать файл
//             console.log('Файл успешно скопирован');
//         }),

//     ],
    
// };










