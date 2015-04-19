'use strict';

var PHPUnitArguments = require('../lib/PHPUnitArguments');

describe('PHPUnitArguments', function() {

  describe('getAll', function() {

    it('returns all arguments except the ones used to launch PUW', function() {
      var commandLineArgumentsList1 = ['node', '/home/niro/PHPUnit-Watcher/puw', '--colors', 'fixtures/FailingTest.php'],
        phpUnitArguments1 = new PHPUnitArguments(commandLineArgumentsList1);

      expect(phpUnitArguments1.getAll()).to.deep.equal(['--colors', 'fixtures/FailingTest.php']);


      var commandLineArgumentsList2 = ['node', '/home/niro/PHPUnit-Watcher/puw', '-c', 'app/'],
        phpUnitArguments2 = new PHPUnitArguments(commandLineArgumentsList2);

      expect(phpUnitArguments2.getAll()).to.deep.equal(['-c', 'app/']);
    });

    it('removes PUW arguments regardless of letter case used', function() {
      var commandLineArgumentsList = ['nOdE', '/home/niro/PHPUnit-Watcher/pUw', '--colors', 'fixtures/FailingTest.php'],
        phpUnitArguments = new PHPUnitArguments(commandLineArgumentsList);

      expect(phpUnitArguments.getAll()).to.deep.equal(['--colors', 'fixtures/FailingTest.php']);
    });

    it('removes PUW filename if it ends with ".js" or not', function() {
      var commandLineArgumentsList = ['node', '/home/niro/PHPUnit-Watcher/puw.js', '--colors', 'fixtures/FailingTest.php'],
        phpUnitArguments = new PHPUnitArguments(commandLineArgumentsList);

      expect(phpUnitArguments.getAll()).to.deep.equal(['--colors', 'fixtures/FailingTest.php']);
    });

    it('removes PUW filename if app was launched using directory location or "."', function() {
      var commandLineArgumentsList = ['node', '/home/niro/PHPUnit-Watcher', '--colors', 'fixtures/FailingTest.php'],
        phpUnitArguments = new PHPUnitArguments(commandLineArgumentsList);

      expect(phpUnitArguments.getAll()).to.deep.equal(['--colors', 'fixtures/FailingTest.php']);
    });

    it('doesnot remove any arguments that resemble the filename', function() {
      var commandLineArgumentsList = ['node', '/home/niro/PHPUnit-Watcher/puw.js', '--colors', 'fixtures/puw.php', 'fixtures/puw/fake.php'],
        phpUnitArguments = new PHPUnitArguments(commandLineArgumentsList);

      expect(phpUnitArguments.getAll()).to.deep.equal(['--colors', 'fixtures/puw.php', 'fixtures/puw/fake.php']);
    });

    it('doesnot remove any arguments that resembles node', function() {
      var commandLineArgumentsList = ['node', '/home/niro/PHPUnit-Watcher/puw.js', '--colors', 'fixtures/node.php', 'fixtures/node/fake.php'],
        phpUnitArguments = new PHPUnitArguments(commandLineArgumentsList);

      expect(phpUnitArguments.getAll()).to.deep.equal(['--colors', 'fixtures/node.php', 'fixtures/node/fake.php']);
    });

  });




  describe('getLaunchCommand()', function() {

    it('returns the terminal command to launch phpunit with given arguments', function() {
      var phpUnitArguments = new PHPUnitArguments(['node', 'puw',  '--colors']);

      var launchCommand = phpUnitArguments.getLaunchCommand();

      expect(launchCommand).to.equal('phpunit --colors');
    });
  });


});
