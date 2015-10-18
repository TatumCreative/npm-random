var Alea = require('./prng/alea')

module.exports = function seededRandomFn(/* seed */) {
	
	var random = Alea.apply(this, arguments)
	
	return function seededRandom( min, max, isBoolean ) {
		
		min = min === undefined ? 0 : min
		max = max === undefined ? 1 : max
		var value = min + random() * (max - min)
		
		return isBoolean ? parseInt( value, 10 ) : value
	}
}