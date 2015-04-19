'use strict';

var resolve = require('path').resolve,
  basename = require('path').basename;

/**
 * @todo Create a better arguments parser to check for exact filenames and remove them only if they are really
 *       referring to this script
**/
function _parsePhpUnitConfigurations(phpUnitConfiguration) {
  for (var ii = phpUnitConfiguration.length; ii--;) {
    if ( (basename(phpUnitConfiguration[ii], '.exe').toLowerCase() === 'node')
        //removes arument if app was launched using filename
        || (basename(phpUnitConfiguration[ii], '.js').toLowerCase() === 'puw')
        //removes argument if app was launched using directory name or .
        || (basename(phpUnitConfiguration[ii]).toLowerCase() === basename(resolve(__dirname+'/..')).toLowerCase())
        ) {
      phpUnitConfiguration.splice(ii, 1);
    }
  }

  return phpUnitConfiguration;
}


function PHPUnitArguments(commandLineArguments) {
  commandLineArguments = commandLineArguments || [];

  //remove all non-PHPUnit command line arguments from the arguments passed
  this.arguments = _parsePhpUnitConfigurations(commandLineArguments);
}

PHPUnitArguments.prototype.getLaunchCommand = function() {
  return 'phpunit ' + this.arguments.join(' ');
};

PHPUnitArguments.prototype.getAll = function() {
  return this.arguments;
};

module.exports = PHPUnitArguments;
