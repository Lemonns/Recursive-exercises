function productOfArray(array) {
    if (array.length == 0) {
        return 1
    }else {
        return array.shift() * productOfArray(array)
    }
}

console.log(productOfArray([1, 2, 3]))