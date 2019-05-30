#!/usr/bin/env node

const fs = require('fs');

const regex = /calc\((.*)var(.*)\)/g;
const files = ['./less/fundamental-styles.less', './less/fundamental-styles-ie11.less'];


files.forEach(file => {
    fs.readFile(file, 'utf8', function (err,data) {
        if (err) {
            return console.log(err);
        }
        var result = data.replace(regex, '~"calc\($1var$2\)"');
        
        fs.writeFile(file, result, 'utf8', function (err) {
            if (err) return console.log(err);
        });
    });
})
