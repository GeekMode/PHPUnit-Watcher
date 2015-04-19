'use strict';

var CommandLineArguments = require('./CommandLineArguments'),
  PHPUnitArgumentsGenerator = require('./PHPUnitArgumentsGenerator'),
  commandLineArguments,
  phpUnitArgumentGenerator,
  phpUnitLaunchCommand;

//get command line arguments relevant to be passed to PHPUnit
commandLineArguments = new CommandLineArguments(process.argv);

//generate shell command for launching PHPUnit with relevant arguments
phpUnitArgumentGenerator = new PHPUnitArgumentsGenerator(commandLineArguments.getPHPUnitArguments());
phpUnitLaunchCommand = phpUnitArgumentGenerator.getLaunchCommand();

console.log(phpUnitLaunchCommand);
