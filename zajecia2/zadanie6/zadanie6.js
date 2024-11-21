function palindrom(text){
    let textRev = text.split('').reverse().join('');
    if(text.toLowerCase() === textRev.toLowerCase()){
        return true;
    }
    return false;
}

console.log(palindrom("kajak"))