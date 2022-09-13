var allAreLessThanSeven = all([9,2,1], function(num){
	return num < 7;
});

function all(array, callback) {
    let copy = array.slice()
    if (copy.length === 0) return true;

    if (callback(copy[0])) {
        copy.shift()
        return all(copy, callback)
    }else {
        return false;
    }
}

console.log(allAreLessThanSeven)