function isOdd(x) {
    if (x % 2 === 0){
        return false;
    }else{
        return true;
    }
}

const isEven = (x) => {
    if(x % 2 === 0){
        return true;
    }
    return false;
}

console.log(isOdd(3))

console.log(isEven(2))