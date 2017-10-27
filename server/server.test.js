const request = require('supertest');
const expect = require('expect');

var app = require('./server').app;

// using Mocha as the test framwork
// and using supertest to fill in the gap
it('should return hello world response', (done) => {
  request(app) // pass our express app
    .get('/') // make a get request
    .expect(404) //status code
    .expect((res) => {
      /*
      The combination of supertest and expect
      since supertest only supports equal assertion.
      The 'res' is the same as what we get from HTTP response
      */
      expect(res.body).toInclude({
        error: 'Page not found.'
      });
    }) //.expect('Hello world!') // the response body
    .end(done); // to wrap up with 'end' and pass 'done' as callback
});

// Make a new test
// assert 200
// Assert that you exist in users array
it('should return an array of objects', (done) => {
  request(app)
    .get('/users')
    .expect(200)
    .expect((res) => {
      expect(res.body).toInclude({
        name: 'Garfield',
        age: 34
      });
    })
    .end(done);
});
