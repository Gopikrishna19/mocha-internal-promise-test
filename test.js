var expect = require('code').expect;
var sinon = require('sinon');

var sample = require('./sample');

describe('Internal promise test', () => {

  beforeEach(() => {

    sinon.stub(console, 'log');
    sinon.stub(sample, 'prom');
  });

  afterEach(() => {
    console.log.restore();
    sample.prom.restore();
  });

  it('should call resolve', (done) => {

    var logPromise = Promise.resolve('response');
    var testPromise = Promise.resolve(logPromise);

    sample.prom.returns(logPromise);

    sample.run();

    testPromise.then(function () {
      sinon.assert.calledOnce(console.log);
      sinon.assert.calledWithExactly(console.log, 'resolved', 'response');
    }).then(done, done);

  });

  it('should call reject', (done) => {

    var logPromise = Promise.reject('response');
    var testPromise = Promise.resolve(logPromise);

    sample.prom.returns(logPromise);

    sample.run();

    testPromise.catch(function () {
      sinon.assert.calledOnce(console.log);
      sinon.assert.calledWithExactly(console.log, 'rejected', 'response');
    }).then(done, done);

  });

});

