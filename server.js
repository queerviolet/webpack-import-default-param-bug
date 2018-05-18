// Set options as a parameter, environment variable, or rc file.
require = require("esm")(module/*, options*/)
const {default: sum} = require('./index.js')
const {equal} = require('assert')
console.log('2 + 3 =', sum(2, 3))
equal(sum(2, 3), 2 + 3)