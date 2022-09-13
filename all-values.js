function all(array, callback) {
    var copy = array.slice()
    if (copy.length === 0) return true;
    
}


var allAreLessThanSeven = all([1,2,9], function(num){
	return num < 7;
});

console.log(allAreLessThanSeven)