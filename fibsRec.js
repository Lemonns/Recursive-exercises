function fibsRec(n, arr=[]) {
    if (n == 1 || n == 0) {
        return n;
    }else {
        return fibsRec(n-1) + fibsRec(n-2)
    }
}

console.log(fibsRec(5))