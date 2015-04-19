'use strict';

var CommandLineArguments = require('../lib/CommandLineArguments');

describe('CommandLineArguments', function() {

  describe('getPHPUnitArguments', function() {

    it('returns all arguments except the ones used to launch PUW', function() {
      var phpUnitConfiguration1 = ['node', '/home/niro/PHPUnit-Watcher/puw', '--colors', 'fixtures/FailingTest.php'],
        commandLineArguments1 = new CommandLineArguments(phpUnitConfiguration1);

      var phpUnitArguments1 = commandLineArguments1.getPHPUnitArguments();
      expect(phpUnitArguments1).to.equal('--colors fixtures/FailingTest.php');


      var phpUnitConfiguration2 = ['node', '/home/niro/PHPUnit-Watcher/puw', '-c', 'app/'],
        commandLineArguments2 = new CommandLineArguments(phpUnitConfiguration2);

      var phpUnitArguments2 = commandLineArguments2.getPHPUnitArguments();
      expect(phpUnitArguments2).to.equal('-c app/');
    });

    it('removes PUW arguments regardless of letter case used', function() {
      var phpUnitConfiguration = ['nOdE', '/home/niro/PHPUnit-Watcher/pUw', '--colors', 'fixtures/FailingTest.php'],
        commandLineArguments = new CommandLineArguments(phpUnitConfiguration);

      var phpUnitArguments = commandLineArguments.getPHPUnitArguments();
      expect(phpUnitArguments).to.equal('--colors fixtures/FailingTest.php');
    });

    it('removes PUW filename if it ends with ".js" or not', function() {
      var phpUnitConfiguration = ['node', '/home/niro/PHPUnit-Watcher/puw.js', '--colors', 'fixtures/FailingTest.php'],
        commandLineArguments = new CommandLineArguments(phpUnitConfiguration);

      var phpUnitArguments = commandLineArguments.getPHPUnitArguments();
      expect(phpUnitArguments).to.equal('--colors fixtures/FailingTest.php');
    });

    it('removes PUW filename if app was launched using directory location or "."', function() {
      var phpUnitConfiguration = ['node', '/home/niro/PHPUnit-Watcher', '--colors', 'fixtures/FailingTest.php'],
        commandLineArguments = new CommandLineArguments(phpUnitConfiguration);

      var phpUnitArguments = commandLineArguments.getPHPUnitArguments();
      expect(phpUnitArguments).to.equal('--colors fixtures/FailingTest.php');
    });

    it('doesnot remove any arguments that resemble the filename', function() {
      var phpUnitConfiguration = ['node', '/home/niro/PHPUnit-Watcher/puw.js', '--colors', 'fixtures/puw.php', 'fixtures/puw/fake.php'],
        commandLineArguments = new CommandLineArguments(phpUnitConfiguration);

      var phpUnitArguments = commandLineArguments.getPHPUnitArguments();
      expect(phpUnitArguments).to.equal('--colors fixtures/puw.php fixtures/puw/fake.php');
    });

    it('doesnot remove any arguments that resembles node', function() {
      var phpUnitConfiguration = ['node', '/home/niro/PHPUnit-Watcher/puw.js', '--colors', 'fixtures/node.php', 'fixtures/node/fake.php'],
        commandLineArguments = new CommandLineArguments(phpUnitConfiguration);

      var phpUnitArguments = commandLineArguments.getPHPUnitArguments();
      expect(phpUnitArguments).to.equal('--colors fixtures/node.php fixtures/node/fake.php');
    });

  });

});
