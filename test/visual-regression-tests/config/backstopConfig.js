const fs = require('fs');
const backstopCIConfigLocation = 'test/visual-regression-tests/config/backstopConfigCI.json';

let origin = 'host.docker.internal';

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
  "referenceUrl": "",
  "readyEvent": "",
  "readySelector": "",
  "delay": 100,
  "hideSelectors": [],
  "removeSelectors": [],
  "hoverSelector": "",
  "clickSelector": "",
  "postInteractionWait": 0,
  "selectorExpansion": false,
  "expect": 0,
  "misMatchThreshold": 0.1,
  "requireSameDimensions": true
}

// Specific visual test component configurations.  Read the associated component configuration directory and merge the json.
fs.readdirSync("test/templates").forEach(function (component) {
  if (!component.includes('.njk') && (component != 'spinner' && component != 'loading-spinner' && component != 'loading-dots')) {
    let componentScenario = {
      "label": component,
      "urlSuffix": `/${component}`,
      "selectors": [
        `#example-container .fd-${component}`,
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
});

console.log('Found ' + scenarios.length + ' Visual test scenarios to execute');

module.exports = {
  "id": "visual_regression_fundamental",
  "viewports": [
    {
      "label": "desktop",
      "width": 1920,
      "height": 1080
    }
  ],
  "scenarios": scenarios,
  "paths": {
    "bitmaps_reference": "test/visual-regression-tests/resources/reference_images",
    "bitmaps_test": "test/visual-regression-tests/backstop_data/bitmaps_test",
    "engine_scripts": "test/visual-regression-tests/resources/engine_scripts",
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