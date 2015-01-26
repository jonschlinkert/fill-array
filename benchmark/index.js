'use strict';

var Suite = require('benchmarked');

var suite = new Suite({
  result: false,
  fixtures: 'fixtures/{5,100,250,2000}.js',
  add: 'code/cu*.js',
  cwd: __dirname
});

suite.run();
