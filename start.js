#!/usr/bin/env node
// Simple start script
const path = require('path');
process.chdir(path.join(__dirname, 'frontend'));
require('react-scripts/bin/react-scripts').default(['start']);
