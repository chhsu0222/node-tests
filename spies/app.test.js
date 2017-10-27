// spies do come built in with expect
const expect = require('expect');
const rewire = require('rewire');

var app = rewire('./app'); // just like require

describe('App', () => {

  // Replace the db.saveUser with a spy
  var db = {
    saveUser: expect.createSpy()
  };
  app.__set__('db', db);

  it('should call the spy correctly', () => {
    var spy = expect.createSpy(); // create a spy function
    // spy();
    // expect(spy).toHaveBeenCalled();
    spy('CH', 30);
    expect(spy).toHaveBeenCalledWith('CH', 30);
  });

  it('should call saveUser with user object', () => {
    var email = 'ch@example.com';
    var password = '123abc';

    app.handleSignup(email, password);
    /*
    The db.server called by app.handleSignup is the spy we defined above.
    */
    expect(db.saveUser).toHaveBeenCalledWith({
      email,
      password
    });

  });

});
