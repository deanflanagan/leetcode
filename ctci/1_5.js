const orig = 'pales';
const t1 = 'bakes';

const closeEdit = (original, newString) => {
    if ((newString.length - original.length)**2 <=1 ) {
        let commonCharSum = 0;
        for (let char in [...newString]){
            if (original.includes(newString[char]))
                {
                    commonCharSum += 1
                }
            if (commonCharSum >= original.length) {
                return true
            }
        }
        // const commonCharSum = [...newString].reduce((sum, next) => sum && )
        // const commonCharSum = [...newString].map((a) => original.includes(a) ? 1: 0)
        // const test = [...newString].reduce((acc, ttl) => ((original.includes(ttl) ? 1: 0),0))
    }
    return false
}
console.log(closeEdit(orig, t1))