var Test = require('tape')
var Random = require('./random')

Test("random", function(t) {
	
	var samples = 5
	
	t.test("works bare", function(t) {
		
		var random = Random()
		t.plan( samples * 2 )
		
		for( var i=0; i < samples; i++ ) {
			var value = random()
			t.assert( value >= 0 )
			t.assert( value <= 1 )
		}
	})
	
	t.test("with a range", function(t) {
		
		var random = Random()
		t.plan( samples * 2 )
		
		for( var i=0; i < samples; i++ ) {
			var value = random(5, 10)
			t.assert( value >= 5 )
			t.assert( value <= 10 )
		}
	})
	
	t.test("generates booleans", function(t) {
		
		var random = Random()
		t.plan( samples * 3 )
		
		for( var i=0; i < samples; i++ ) {
			var value = random(5, 10, true)
			t.assert( value >= 5 )
			t.assert( value <= 10 )
			t.equal( value, parseInt( value, 10 ) )
		}
	})
	
	t.test("repeatable", function(t) {
		
		var randomA = Random("foo")
		var randomB = Random("foo")
		
		t.plan( samples )
		
		for( var i=0; i < samples; i++ ) {
			var valueA = randomA(5, 10)
			var valueB = randomB(5, 10)
			
			t.equal( valueA, valueB )
		}
	})
	
})