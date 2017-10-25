const utils = require('./utils');

/*
creating a new test case using it, which is a function
provided by mocha without importing mocha.
it takes 2 arguments. 1st one is a string description.
(behavior driven development, a.k.a BDD)
2nd on is the callback (test) function.
Then modify the "test" property in package.json.
Using 'npm test' in the terminal to run the test.
*/
it('should add two numbers', () => {
  var res = utils.add(33, 11);

  if (res !== 44) {
    throw new Error(`Expected 44, but got ${res}.`);
  }

});

it('should square a number', () => {
  var res = utils.square(15);

  if (res !== 225) {
    throw new Error(`Expected 225, but got ${res}.`);
  }
});
