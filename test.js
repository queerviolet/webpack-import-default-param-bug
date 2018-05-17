const {equal} = require('assert')
require('./dist/bundle')
equal(sum(2, 3), 5)
