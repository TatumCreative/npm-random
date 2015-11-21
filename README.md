# Random

[![build status][travis-image]][travis-url]
[![stability][stability-image]][stability-url]

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

## Types of seeds

	var seededByDate = Random()
	var seededByNumber = Random( 1 )
	var seededByString = Random( "hello" )
	var seededByMultipleArgs = Random( "yellow", Math.random(), +new Date() )

[stability-image]: https://img.shields.io/badge/stability-stable-brightgreen.svg?style=flat-square
[stability-url]: https://nodejs.org/api/documentation.html#documentation_stability_index
[travis-image]: https://img.shields.io/travis/TatumCreative/npm-random/master.svg?style=flat-square
[travis-url]: http://travis-ci.org/TatumCreative/npm-random
