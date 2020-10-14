/* eslint-disable no-console */
const mkdirp = require('mkdirp');
var ncp = require('ncp').ncp;

mkdirp('dist/images').then(made =>{
    if (made) {
        console.log(`made ${made}`);
        ncp('public/images', `${made}/`, function(err) {
            if (err) {
                return console.error(`failed to copy from public/images to dist/images: ${err}`);
            }
        });
    }
}, reason => {
    console.error(`failed to make dir dist/images: ${reason}`);
});
