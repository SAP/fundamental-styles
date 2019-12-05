const fs = require('fs');
const backstopCIConfigLocation = 'test/visual-regression-tests/config/backstopConfigCI.json';

let origin = 'localhost';

if (fs.existsSync(backstopCIConfigLocation)) {
  const ciConfig = JSON.parse(fs.readFileSync(backstopCIConfigLocation));
  if (ciConfig.ip) {
    origin = ciConfig.ip;
  }
}
console.log('Using URL origin ', origin);

const scenarios = [];

// The default scenario configuration. This can be overwritten in each of the config files as needed.
const defaultScenario = {
  "urlPrefix": "http://" + origin + ":3030",
  "delay": 100,
  "postInteractionWait": 0,
  "selectorExpansion": false,
  "expect": 0,
  "misMatchThreshold": 0.1,
  "requireSameDimensions": true
}

let prepareComponentScenario = (component) => {

  let componentScenario = {
    "label": component,
    "urlSuffix": `/${component}`,
    "selectors": [
      `.backstop`,
    ],
    "selectorExpansion": true
  }
  const scenario = { ...defaultScenario, ...componentScenario };
  // Ensure each config file has a urlSuffix, label and selectors defined.
  if (!scenario.urlSuffix || !scenario.label || !scenario.selectors) {
    throw "Error with backstop config file '" + configFile + "', must include urlSuffix, label and selectors";
  }
  scenario.url = scenario.urlPrefix + scenario.urlSuffix;
  scenarios.push(scenario);
}

// Specific visual test component configurations.  Read the associated component configuration directory and merge the json.
let prepareAllTestScenarios = () => {
  fs.readdirSync('test/templates').forEach((component) => {
    if (!component.includes('.njk') && component != 'spinner') {
      prepareComponentScenario(component);
    }
  })
};

prepareAllTestScenarios();

console.log('Found ' + scenarios.length + ' Visual test scenarios to execute');

module.exports = {
  "id": "FS",
  "viewports": [
    {
      "width": 1920,
      "height": 1080
    }
  ],
  "scenarios": scenarios,
  "paths": {
    "bitmaps_reference": "test/visual-regression-tests/reference_images",
    "bitmaps_test": "test/visual-regression-tests/backstop_data/bitmaps_test",
    "html_report": "test/visual-regression-tests/backstop_data/html_report",
    "ci_report": "test/visual-regression-tests/backstop_data/ci_report"
  },
  "report": ["CI"],
  "engine": "chromy",
  "engineOptions": {
    "chromeFlags": [
      "--disable-dev-shm-usage"
    ]
  },
  "debug": false,
  "debugWindow": false
}