
describe('PUW', function() {

  it('should pass all PHPUnit command-line arguments from PUW to PHPUnit', function(done) {
    var output = '',
      exec = require('child_process').exec;

    var child = exec('node lib/puw fixtures/FailingTest.php');

    child.stdout.on('data', function(data) {
      output += data;
    });

    child.on('close', function() {
      expect(output).to.match(/FAILURES!/);
      done();
    });

  });


});
