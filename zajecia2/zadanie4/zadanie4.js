function sum(arr){
    let sum = 0;
    arr.forEach(element => {
        sum += element;
    });

    return sum;
}

console.log(sum([3, 7, 5]))