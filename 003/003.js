
var s = 'abcabcbb'

var lengthOfLongestSubstring = function(str) {
    let maxLength = 0;
    let start = 0;
    let seen = {};

    Array.from([...str]).map( function(element, index) 
    { if ( (seen.hasOwnProperty(element)) || ( start <= seen[str[index]])) {
        start = seen[str[index]]  + 1
    }
    else {
        maxLength = Math.max(maxLength, index - start + 1)
    }
        seen[str[index]] =  index })

    console.log(seen)
    console.log(maxLength)

    
    
}

lengthOfLongestSubstring(s)