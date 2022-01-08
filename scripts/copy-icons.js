/* eslint-disable no-console */
const mkdirp = require('mkdirp');
var ncp = require('ncp').ncp;

mkdirp('dist-fn-icons').then( made => {
    if (made) {
        mkdirp('dist-fn-icons/dist').then( distMade => {
            if (distMade) {
                console.log(`made ${distMade}`);
                ncp('src/icons', `${distMade}/`, function(err) {
                    if (err) {
                        return console.error(`failed to copy from src/icons to dist-fn-icons/dist: ${err}`);
                    }
                });
                ncp('config/fn-icons', `${made}/`, function(err) {
                    if (err) {
                        return console.error(`failed to copy from config/fn-icons to dist-fn-icons: ${err}`);
                    }
                });
            }

        }, reason => {
            console.error(`failed to make dir dist-fn-icons/dist: ${reason}`);
        });
    }

}, reason => {
    console.error(`failed to make dir dist-fn-icons: ${reason}`);
});
