var s1 = 'erbottlewat'
var s2 = 'waterbottle'

const stringRotation = (s1, s2) => {
    // const substringIsRotation = s2 in s1
    console.log((s1+s1+s1).includes(s2))
}

stringRotation(s1, s2)