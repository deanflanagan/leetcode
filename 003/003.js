var crypto = require('crypto')
// var s = crypto.randomBytes(21).toString('hex')
var s = 'abcabcbb'

var lengthOfLongestSubstring = function(str) {
    //  get unique characters first
    // const uniques = Array.from(new Set([...str]))
    Array.from(new Set([...str])).map( c => console.log(str.search(c)))
}

lengthOfLongestSubstring(s)