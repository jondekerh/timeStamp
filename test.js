var chai = require('chai')
  , chaihttp = require('chai-http');
const app = require('./app.js');
var expect = chai.expect;

chai.use(chaihttp);

describe('Test suite for timestamp', () => {

  it('Gets a response containing an object with two keys when no parameters are passed to the API', (done) => {
    chai.request(app)
    .get('/timestamp//')
    .end(function(err, res) {
      expect(res).to.have.status(200);
      expect(res.body).to.have.all.keys("UNIXms", "utc");
      done();
    })
  });

  it('Gets the correct object in response when the parameter \"2015-02-05\" is passed to the API', (done) => {
    chai.request(app)
    .get('/timestamp/2015-02-05')
    .end(function(err, res) {
      expect(res).to.have.status(200);
      expect(res.body.UNIXms).to.equal(1423094400000);
      expect(res.body.utc).to.equal("Thu, 05 Feb 2015 00:00:00 GMT");
      done();
    })
  });

});
