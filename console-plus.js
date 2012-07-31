/**
 * Super useful logger
 *
 * Currently no loggers out there that log time, filename and line number
 * 
 *
 * Example output:
 * 2010-01-17 11:43:37.987 [info] Message in models/User.js:120
 */
var fs = require("fs"),
	util = require("util");

require("callsite");

// Colours
var red   = '\033[31m',
	blue  = '\033[34m'
	reset = '\033[0m';
  

module.exports = {
	log: function() {	
		console.log(arguments.length)
		var trace = getTrace(__stack[1]);
		var string = util.format("%s [log] %s in %s:%d", trace.timestamp, util.format.apply(this, arguments), trace.file, trace.lineno);
		
		process.stdout.write(string + "\n");
	},
	
	info: function() {
		var trace = getTrace(__stack[1]);
		var string = util.format("%s [log] %s in %s:%d", trace.timestamp, util.format.apply(this, arguments), trace.file, trace.lineno);
		
		process.stdout.write(colourise(36, string) + "\n");
	},
	
	error: function() {
		var trace = getTrace(__stack[1]);
		var string = util.format("%s [log] %s in %s:%d", trace.timestamp, util.format.apply(this, arguments), trace.file, trace.lineno);
		
		process.stdout.write(colourise(91, string) + "\n");
	}
}

function getTrace(call) {
	return {
		file: call.getFileName(),
		lineno: call.getLineNumber(),
		timestamp: new Date().toUTCString()
	}
}

function colourise(colourCode, string) {
	return "\033[" + colourCode + "m"  + string + "\033[0m";
}
