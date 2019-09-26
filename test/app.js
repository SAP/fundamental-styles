const nunjucks = require('nunjucks');
const express = require('express');
const path = require('path');
const app = express();
const router = express.Router();
const sass = require('node-sass');
const signale = require('signale');

const TEMPLATE_DIRECTORY = path.join(__dirname, 'templates');
const MODULES_DIRECTORY = path.join(__dirname, 'modules');
const PUBLIC_DIRECTORY = path.join(__dirname, 'public');
const COMPONENTS_DIRECTORY = path.join(__dirname, '..', 'src');

const GLOBALS = {
    namespace: 'fd'
};
const config = {
    id: "fundamentals"
}
// looks for html in templates folder, static resources in public
var env = nunjucks.configure([TEMPLATE_DIRECTORY, PUBLIC_DIRECTORY, MODULES_DIRECTORY], {
    autoescape: false,
    cache: false,
    express: app,
    watch: true
});
// convert SASS to CSS from the lib source (for self-contained component styles)
env.addFilter('component_css', (sassFile) => {
    try {
        const scss_filename = `${COMPONENTS_DIRECTORY}/${sassFile}`;
        return sass.renderSync({
            file: scss_filename
        }).css.toString();
        //TO DO: run postcss config
    } catch (err) {
        signale.error(`component_css: ${err.message}`);
    }
});
// convert an array to classes
// returns [ fd-element--mod ]
env.addFilter('modifier', (array = [], element = "", namespace = "") => {
    const _ns = namespace || GLOBALS.namespace;
    //is string
    if (typeof array === "string") {
        if (array === "") { return; }
        return ` ${_ns}-${element}--${array}`;
    }
    const mods = array.map((mod) => {
        if (mod === "") { return; }
        return ` ${_ns}-${element}--${mod}`;
    });
    return mods.join('');
});
// convert an array to classes
// returns [ fd-cls ]
env.addFilter('classes', (array = []) => {
    if (!array) {
        return;
    }
    let _ns = `${GLOBALS.namespace}-`;
    //is string
    if (typeof array === "string") {
        if (array.startsWith("sap-icon") || array.startsWith("fd-")) {
            _ns = "";
        }
        return ` ${_ns}${array}`;
    }
    const classes = array.map((cls) => {
        if (cls.startsWith("sap-icon") || cls.startsWith("fd-")) {
            _ns = "";
        }
        return ` ${_ns}${cls}`;
    });
    return classes.join('');
});
// convert an object to classes
// returns [ is-key ]
env.addFilter('state', (obj = []) => {
    const classes = [];
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            if (!!obj[key]) {
                classes.push(` is-${key}`);
            }
        }
    }
    return classes.join('');
});
// convert an object to classes
// returns [ aria-key="true", role="" ]
env.addFilter('aria', (obj = []) => {
    const attrs = [];
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            if (key === "role") {
                attrs.push(` role="${obj[key]}"`);
            } else {
                attrs.push(` aria-${key}="${obj[key]}"`);
            }
        }
    }
    return attrs.join('');
});
// random_number
// returns 123
env.addFilter('random_number', (length = 3) => {
    const randomFixedInteger = length => Math.floor(10 ** (length - 1) + Math.random() * (10 ** length - 10 ** (length - 1) - 1));
    return randomFixedInteger(length);
});
// random_string
// returns "FAhPm"
env.addFilter('random_string', () => {
    let text = "";
    const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (let i = 0; i < 5; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
});

// pluck
// returns array from an object
// obj | pluck("key")
env.addFilter('pluck', (obj = {}, key = "") => {
    const result = obj.map(a => a[key]);
    return result;
});

// filter_array
// returns obj
// obj | pluck("key")
env.addFilter('filter_array', (array = {}, key = "", value = "") => {
    const result = array.filter(obj => obj[key] === value);
    return result;
});

// unshift_array
// returns obj
env.addFilter('unshift_array', (obj = {}, array = {}) => {
    const result = array.unshift(obj);
    return result;
});

// push_array
// returns obj
env.addFilter('push', (obj = {}, array = {}) => {
    const result = array.push(obj);
    return result;
});

// merge_objs
// returns obj
// obj1 | merge_objs(obj2)
env.addFilter('merge_objs', function (obj1 = {}, obj2 = {}) {
    var result = { ...obj1, ...obj2 };
    return result;
});

app.set('port', process.env.PORT || 3030);

let port = app.get('port');

app.set('views', TEMPLATE_DIRECTORY);
app.set('view engine', 'njk');

app.use(router);
app.use('/static', express.static(path.join(__dirname, 'resources')));
app.use('/normalize', express.static(path.join(__dirname, '..', 'node_modules', 'normalize.css')));
app.use('/sap-theming', express.static(path.join(__dirname, '..', 'node_modules', '@sap-theming', 'theming-base-content', 'content', 'Base', 'baseLib', 'sap_fiori_3')));

//load font files
router.get('/(*/)?FundamentalIcons:key', (req, res) => {
    res.sendFile(path.join(__dirname, '..', `src/icons/FundamentalIcons${req.params.key}`));
});
router.get('/(*/)?SAP-icons:key', (req, res) => {
    res.sendFile(path.join(__dirname, '..', `src/icons/SAP-icons${req.params.key}`));
});
router.get('/(*/)?72/72-:key', (req, res) => {
    res.sendFile(path.join(__dirname, '..', `src/fonts/72/72-${req.params.key}`));
});

router.all('/', (req, res, next) => {
    next();
});

router.get('/', (req, res) => {
    res.render('index', GLOBALS);
});

function getStarterData() {
    const data = {
        "tree": require(`./templates/tree/data.json`),
        "table": require(`./templates/table/data.json`),
        "tabs": require(`./templates/tabs/data.json`),
        "pagination": require(`./templates/pagination/data.json`),
        "side_nav": require(`./templates/side-nav/data.json`),
        "breadcrumb": require(`./templates/breadcrumb/data.json`),
        "localization_editor": require(`./templates/localization-editor/data.json`),
        "image": require(`./templates/image/data.json`),
        "test": require(`./data/test.json`)
    };
    return data;
}

router.get('/:key', (req, res) => {
    if (req.url === '/favicon.ico') {
        res.writeHead(200, {
            'Content-Type': 'image/x-icon'
        });
        res.end();
        return;
    }
    const key = req.params.key;
    let data = {};
    try {
        data = require(`./templates/${key}/data.json`);
    } catch (e) {

    } finally {

    }
    signale.info(`Requested http://localhost:${port}/${key}`);
    res.render(`${key}/index`, Object.assign(GLOBALS, { id: key, component: getStarterData(), data, selfContained: process.env.SELF_CONTAINED, ie11: process.env.IE11 }));
});


router.get('/pages/:key', (req, res) => {
    const key = req.params.key;
    signale.info(`Requested http://localhost:${port}/pages/${key}`);
    res.render(`pages/${key}`, Object.assign(GLOBALS, { id: key, data: getStarterData(), app: config }));
});
router.get('/pages/app/:key', (req, res) => {
    const key = req.params.key;
    signale.info(`Requested http://localhost:${port}/pages/app/${key}`);
    res.render(`pages/app/${key}`, Object.assign(GLOBALS, { id: key, data: getStarterData(), app: config }));
});
router.get('/pages/floorplans/:key', (req, res) => {
    const key = req.params.key;
    signale.info(`Requested http://localhost:${port}/pages/floorplans/${key}`);
    res.render(`pages/floorplans/${key}`, Object.assign(GLOBALS, { id: key, data: getStarterData(), app: config }));
});


app.listen(port);
signale.watch(`Listening at http://localhost:${port}`);
module.exports = app;
