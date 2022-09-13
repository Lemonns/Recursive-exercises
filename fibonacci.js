function fibs(num) {
    let result = []
    let x = 1
    let sum = 0
    for (let i = 0; i < num; i++) {
        let j = x + sum;
        result.push(sum)
        x = sum
        sum = j;
    }
    return result
};

console.log(fibs(4))