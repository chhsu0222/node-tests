const expect = require('expect');
const utils = require('./utils');

// Using describe method to group the tests
describe('Utils', () => {
  it('should add two numbers', () => {
    var res = utils.add(33, 11);

    expect(res).toBe(44).toBeA('number');
  });

  it('should square a number', () => {
    var res = utils.square(15);

    expect(res).toBe(225).toBeA('number');
  });

  it('should async add two numbers', (done) => {
    utils.asyncAdd(4, 3, (sum) => {
      expect(sum).toBe(7).toBeA('number');
      done();
    });
  });

  it('should async square a number', (done) => {
    utils.asyncSquare(6, (res) => {
      expect(res).toBe(36).toBeA('number');
      done();
    });
  });
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
