'use strict';

function PHPUnitArgumentsGenerator(phpUnitArguments) {
  this.arguments = phpUnitArguments || '';
}

PHPUnitArgumentsGenerator.prototype.getLaunchCommand = function() {
  return 'phpunit ' + this.arguments;
};

module.exports = PHPUnitArgumentsGenerator;
