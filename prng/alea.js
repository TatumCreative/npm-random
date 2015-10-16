// Adapted and modified by Greg Tatum

function _mashFn() {
	
	var n = 0xefc8249d
	
	return function mash( data ) {
		
		data = data.toString()
	
		for (var i = 0; i < data.length; i++) {
			n += data.charCodeAt(i)
			var h = 0.02519603282416938 * n
			n = h >>> 0
			h -= n
			h *= n
			n = h >>> 0
			h -= n
			n += h * 0x100000000 // 2^32
		}
		return (n >>> 0) * 2.3283064365386963e-10 // 2^-32
	}
}

module.exports = function createAleaPrngFn( /* seeds */ ) {
	
	var args = Array.prototype.slice.call(arguments)
	
	var s0 = 0
	var s1 = 0
	var s2 = 0
	var c = 1

	if (args.length === 0) {
		args = [+new Date]
	}
	
	var mash = _mashFn()
	
	s0 = s1 = s2 = mash(' ')

	for(var i = 0; i < args.length; i++) {
		
		s0 -= mash(args[i])
		if (s0 < 0) { s0 += 1 }
		s1 -= mash(args[i])
		if (s1 < 0) { s1 += 1 }
		s2 -= mash(args[i])
		if (s2 < 0) { s2 += 1 }
	}

	return function aleaPrng() {
		var t = 2091639 * s0 + c * 2.3283064365386963e-10 // 2^-32
		s0 = s1
		s1 = s2
		return s2 = t - (c = t | 0)
	}
}