load('./lib/jvm-npm.js');
var _ = require('lodash');

var testArray = [
    55,
    12,
    99,
    65,
    164,
    32
];

var secondLast = _.nth(testArray, -2);

print("The second last item was", secondLast);
