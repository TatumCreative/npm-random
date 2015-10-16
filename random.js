var Alea = require('./prng/alea')

module.exports = function seededRandomFn(/* seed */) {
	
	var random = Alea.apply(this, arguments)
	
	return function seededRandom( min, max, isBoolean ) {
		
		min = min || 0
		max = max || 1
		var value = min + random() * (max - min)
		
		return isBoolean ? parseInt( value, 10 ) : value
	}
}