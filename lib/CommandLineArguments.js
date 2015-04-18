'use strict';

function _parsePhpUnitConfigurations(phpUnitConfiguration) {
  for (var ii = phpUnitConfiguration.length - 1; ii--;) {
    if ( (/node/i.test(phpUnitConfiguration[ii]))
        || (/pwu/i.test(phpUnitConfiguration[ii]) )
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
