'use strict';

var PHPUnitArguments = require('./PHPUnitArguments'),
  phpUnitArgument,
  phpUnitLaunchCommand;

//generate shell command for launching PHPUnit with relevant arguments
phpUnitArgument = new PHPUnitArguments(process.argv);
phpUnitLaunchCommand = phpUnitArgument.getLaunchCommand();

console.log(phpUnitLaunchCommand);
