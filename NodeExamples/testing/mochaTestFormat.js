/**
 * An exmaple for the mocha test format.
 * 
 * This shows the BDD test format style.
 */
require('should');	// for better BDD style assertions.

// describe - groups tests.
describe("Title for a set of tests", function () {
	
	describe("array.push()", function () {
		// it - is the test.
		it("should be albe to push have a property name and age.", function () {
			
			// assertions go here. Use node's built in assert module or
			// in this case the 'should' module.
			var a = [];
			a.push('1');
			a.should.be.a('object'); //.and.have.property('name', 'Jon').and.have.property('age', 40);
		});
		
	});
}); 
