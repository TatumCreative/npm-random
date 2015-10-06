var SeedRandom = require('seedrandom')

module.exports = function seededRandomFn( seed ) {
	
	seed = seed || "redherring" + Math.random()
	
	var random = SeedRandom( seed )
	
	return function seededRandom( min, max, isBoolean ) {
		
		min = min || 0
		max = max || 1
		var value = min + random() * (max - min)
		
		return isBoolean ? parseInt( value, 10 ) : value
	}
}