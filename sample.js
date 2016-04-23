module.exports = {

  prom: function () {

    return new Promise(function (res, rej) {

      rej('hello');

    });

  },

  run: function () {
    var p = this.prom();

    p.then(function (response) {
      console.log('resolved', response);
    });

    p.catch(function (response) {
      console.log('rejected', response);
    });
  }

};
