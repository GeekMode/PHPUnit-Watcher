'use strict';

var PHPUnitArgumentsGenerator = require('../lib/PHPUnitArgumentsGenerator');

describe('PHPUnitArgumentsGenerator', function() {

  it('returns the terminal command to launch phpunit with given arguments', function() {
    var phpUnitArguments = new PHPUnitArgumentsGenerator('--colors');

    var launchCommand = phpUnitArguments.getLaunchCommand();

    expect(launchCommand).to.equal('phpunit --colors');
  });
});
