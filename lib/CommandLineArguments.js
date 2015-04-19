'use strict';
var resolve = require('path').resolve,
  basename = require('path').basename;

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

function CommandLineArguments(commandLineArgumentsList) {
  this.commandLineArgumentsList = commandLineArgumentsList || [];

}



CommandLineArguments.prototype.getPHPUnitArguments = function() {
  //remove all non-PHPUnit command line arguments from the arguments passed
  this.phpUnitArguments = _parsePhpUnitConfigurations(this.commandLineArgumentsList);

  return this.phpUnitArguments.join(' ');
};

module.exports = CommandLineArguments;
