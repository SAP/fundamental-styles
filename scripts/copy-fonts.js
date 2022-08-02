/* eslint-disable no-console */
const mkdirp = require('mkdirp');
var ncp = require('ncp').ncp;

mkdirp('dist/fonts').then(made =>{
    if (made) {
        console.log(`made ${made}`);
        ncp('src/fonts', `${made}/`, function(err) {
            if (err) {
                return console.error(`failed to copy from src/fonts to dist/fonts: ${err}`);
            }
        });
    }
}, reason => {
    console.error(`failed to make dir dist/fonts: ${reason}`);
});
