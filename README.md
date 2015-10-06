# Random

Creates a random number generated with an optional seed. Random values can be generated on a range, and as a boolean.

## Usage

	var Random = require('@tatumcreative/random')
	
	var random = Random( "My seed" )
	
	// 0.0 - 1.0
	random()
	
	// 5.0 - 10.0
	random(5, 10)
	
	// 5 - 10
	random(5, 10, true)