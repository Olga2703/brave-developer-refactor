function getIndex(str, firstLetter, secondLetter) {
    let i = str.length - 1;
    while (i > 0) {
        let letter = str.charAt(i);
        if (letter === firstLetter || letter === secondLetter) {
            return i;
        }
        i -= 1;
    }
    return -1;
}
