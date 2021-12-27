var longestCommonPrefix = function(strs) {
    if (strs.length == 0){
        return ""
    }
    let finalResult = ""
    const shortest_word = strs.reduce(function(a, b) {
        return a.length <= b.length ? a : b;
        })
    for(i = shortest_word.length; i > 0; i--){
        const res = strs.map( string => string.startsWith(shortest_word.slice(0,i)))
        if(res.every(Boolean)){
            finalResult= shortest_word.slice(0,i)
            break
        }
    }
    return finalResult
};



console.log(longestCommonPrefix(["flower","flow","flight"]))
console.log(longestCommonPrefix(["dog","racecar","car"]))
console.log(longestCommonPrefix([]))