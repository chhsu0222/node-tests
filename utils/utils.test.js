const expect = require('expect');
const utils = require('./utils');

/*
creating a new test case using it, which is a function
provided by mocha without importing mocha.
it takes 2 arguments. 1st one is a string description.
(behavior driven development, a.k.a BDD)
2nd one is the callback (test) function.
Then modify the "test" property in package.json.
Using 'npm test' in the terminal to run the test.
Using nodemon -x "npm test" to run the test with nodemon
Using 'npm run test-watch' to run the test
*/
it('should add two numbers', () => {
  var res = utils.add(33, 11);

  // using assertion library
  expect(res).toBe(44).toBeA('number');
  // if (res !== 44) {
  //   throw new Error(`Expected 44, but got ${res}.`);
  // }

});

it('should square a number', () => {
  var res = utils.square(15);

  expect(res).toBe(225).toBeA('number');
});

it('should set firstName and lastName', () => {
  var userObject = {
    age: 30,
    address: 'Taipei'
  };
  var res = utils.setName(userObject, 'CH Hsu');
  /*
  userObject is modified as well because objects are passed by reference.
  So both userObject & res are going to have the exact same value.
  */
  expect(userObject).toEqual(res);
  expect(res).toInclude({
    firstName: 'CH',
    lastName: 'Hsu'
  }).toBeA('object');
});

// it('should expect some values', () => {
//   expect(12).toNotBe(11);
  // for object & array
  //expect({name: 'CH'}).toBe({name: 'CH'});
  /*
  The above result would be fail since these are 2 different
  objects and 'toBe' uses === to compare the arguments
  */
  // 'toEqual' uses is-equal to compare the arguments
  //expect({name: 'CH'}).toEqual({name: 'CH'});

  /*
  to check if an array or object includes a certain
  item or properties.
  */
  //expect([2, 3, 4]).toInclude(4);
  //expect([2, 3, 4]).toExclude(1);
  // expect({
  //   name: 'CH',
  //   age: 30,
  //   address: 'Taipei'
  // }).toInclude({
  //   age: 30
  // });

// });
