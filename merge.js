const mergeSort = (array) => {
    if (array.length < 2) return array;
    //GO THROUGH ON PAPER
    let halfLength = Math.ceil(array.length / 2);
    let left = array.slice(0, halfLength);
    let right = array.slice(halfLength);

    //console.log(left, right);
    left = mergeSort(left)
    right = mergeSort(right)

    return merge(left, right)
};


const merge = (left, right) => {
    let sortedArray = []
    
    while (left.length > 0 && right.length > 0) {
        if (left[0] > right[0]) {
            sortedArray.push(right.shift())
        }else {
            sortedArray.push(left.shift())
        };
    };
    console.log(sortedArray)
    return [...sortedArray, ...left, ...right]
};

console.log(mergeSort([122, 2, 3, 4, 5, 6, 1, 23, 3]));