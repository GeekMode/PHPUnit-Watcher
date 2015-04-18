'use strict';
var basename = require('path').basename;

function _parsePhpUnitConfigurations(phpUnitConfiguration) {
  for (var ii = phpUnitConfiguration.length - 1; ii--;) {
    if ( (basename(phpUnitConfiguration[ii], '.exe').toLowerCase() === 'node')
        || (basename(phpUnitConfiguration[ii], '.js').toLowerCase() === 'pwu')
        ) {
      phpUnitConfiguration.splice(ii, 1);
    }
  }

  return phpUnitConfiguration;
}

function CommandLineArguments(phpUnitConfiguration) {
  phpUnitConfiguration = phpUnitConfiguration || [];

  //remove all non-PHPUnit command line arguments from the arguments passed
  this.arguments = _parsePhpUnitConfigurations(phpUnitConfiguration);
}



CommandLineArguments.prototype.getPHPUnitArguments = function() {
  return this.arguments.join(' ');
};

module.exports = CommandLineArguments;
