const s = 'alsdjfalkdjfoiajo'; // false
const t = 'asdfj'; // true

const unique = (string) => {
    let uniqueChars = {};
    for (let i = 0; i < string.length; i++) {
        if ( !uniqueChars.hasOwnProperty(string[i])  )
        {
            uniqueChars[string[i]] =  null
        }
        else {
            return false
        }
      }
      return true
    }

const oonique = (string) => {
    for (let i = 0; i < string.length; i++){
        let counter = 0;
        for(let j = 0; j < string.length; j++){
            if (string[i] === string[j]){
                counter += 1;
            }
            
        }
        if (counter > 1){
            return false
        }
    }
    return true
}


console.log(oonique(t))

// samantha 1866 889 8861 ext 5557942321
// 1866 July 13th 26th online banking