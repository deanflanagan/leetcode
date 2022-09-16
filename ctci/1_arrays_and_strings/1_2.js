const one = 'abcda';
const two = 'acdab';

const is_perm = (str1, str2) => {
    const strOneObj = [...str1].reduce((res, char) => (res[char] = (res[char] || 0) + 1, res), {})
    for (let property in strOneObj){
        if (!str2.includes(property) || strOneObj[property] != (str2.split(property).length - 1)) {
            return false
        }
    }
    return true
}

console.log(is_perm(one,two))