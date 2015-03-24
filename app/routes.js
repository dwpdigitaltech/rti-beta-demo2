module.exports = {
  bind : function (app) {

    app.get('/', function (req, res) {
      res.render('index');
    });

    // add your routes here
    app.get('/RTI/data.html', function (req, res) {
      res.render('RTI/data.html');
    });

    app.get('/RTI/data2.html', function (req, res) {
      res.render('RTI/data2.html');
    });

    app.get('/RTI/data3.html', function (req, res) {
      res.render('RTI/data3.html');
    });

    app.get('/RTI/earnings.html', function (req, res) {
      res.render('RTI/earnings.html');
    });

    app.get('/RTI/setInterest.html', function (req, res) {
      res.render('RTI/setInterest.html');
    });

    app.get('/RTI/interestSet.html', function (req, res) {
      res.render('RTI/interestSet.html');
    });

  }
};
