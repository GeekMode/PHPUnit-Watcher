'use strict';

var CommandLineArguments = require('./lib/CommandLineArguments'),
  PHPUnitArgumentsGenerator = require('./lib/PHPUnitArgumentsGenerator');

var commandLineArguments = new CommandLineArguments(process.argv);
var phpUnitArgumentGenerator = new PHPUnitArgumentsGenerator(commandLineArguments.getPHPUnitArguments());

var phpUnitLaunchCommand = phpUnitArgumentGenerator.getLaunchCommand();

console.log(phpUnitLaunchCommand);
