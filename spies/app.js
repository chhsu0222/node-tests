var db = require('./db');

/*
Spies let us swap out a real function for a test utility.
When the test function gets called we can create various assertions
about it making it was called with certain arguments.
(Fake the called function. e.g. db.saveUser)
We just want to check if it was called with correct arguments.
It's never actually going to execute the code inside db.saveUser.
*/

module.exports.handleSignup = (email, password) => {

  db.saveUser({
    email,
    password
  });
};
