//  is palindrome

const s = 'Tact sCoa'

const charCounts = [...s.toLowerCase().replace(' ','')].reduce((res, char) => (res[char] = (res[char] || 0) + 1, res), {})

const isPalindrome = (obj) =>{
if (Object.values(obj).filter((a) => { return a % 2 }).length > 1){
    return false
    }
    return true
}

console.log(isPalindrome(charCounts))