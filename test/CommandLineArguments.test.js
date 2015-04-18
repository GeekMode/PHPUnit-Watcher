'use strict';

var CommandLineArguments = require('../lib/CommandLineArguments');

describe('CommandLineArguments', function() {

  describe('getPHPUnitArguments', function() {

    it('returns all arguments except the ones used to launch PUW', function() {
      var phpUnitConfiguration1 = ['node', '/home/niro/PHPUnit-Watcher/pwu', '--colors', 'fixtures/FailingTest.php'],
        commandLineArguments1 = new CommandLineArguments(phpUnitConfiguration1);

      var phpUnitArguments1 = commandLineArguments1.getPHPUnitArguments();
      expect(phpUnitArguments1).to.equal('--colors fixtures/FailingTest.php');


      var phpUnitConfiguration2 = ['node', '/home/niro/PHPUnit-Watcher/pwu', '-c', 'app/'],
        commandLineArguments2 = new CommandLineArguments(phpUnitConfiguration2);

      var phpUnitArguments2 = commandLineArguments2.getPHPUnitArguments();
      expect(phpUnitArguments2).to.equal('-c app/');
    });
  });

});
