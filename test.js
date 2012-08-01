var console = require("./console-plus");

// demo of different levels
describe("Console plus", function() {

	describe("#log", function() {
		it("should display a log message in default colour", function() {
			console.log("I am logging!");	
		});
		
		it("should write objects out", function() {
			console.log({name: "Itadakimasu", hobbies: {language: "JavaScript", sport: "Ultimate frisbee"}});
		});
	});

	describe("#info", function() {
		it("should display a log message in blue", function() {
			console.info("Info!");
		});
	});
	
	describe("#error", function() {
		it("should display a log message in red", function() {
			console.error("error!");
		});
	});
})


