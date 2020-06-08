#!/usr/bin/env node
/* eslint-disable no-console */
const ip = require('ip');
const fs = require('fs');

const localIp = ip.address();
const ciConfig = { ip: localIp };
fs.writeFileSync('test/visual-regression-tests/config/backstopConfigCI.json', JSON.stringify(ciConfig));

console.log('Updated CI config with IP address ', localIp);

