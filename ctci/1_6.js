
const compressor = (string) => {
    let breaks = 1;
    let finalString = '';
    let current_char = string[0];
    let lastIndexStop = 0;

    for (let i = 0; i < string.length;i++) {
        if (current_char != string[i]) {
            finalString += current_char.concat(String(i - lastIndexStop))
            current_char = string[i]
            lastIndexStop = i 
            breaks += 1
        }
    }
    if (breaks > string.length){
        return string
    }
    else {
        finalString += current_char.concat(String(string.length - lastIndexStop))
        return finalString
    }
}

console.log(compressor('aabcccccaaa'))