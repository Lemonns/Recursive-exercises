function factorial(n) {
    if (n == 1) {
        return 1;
    }else {
        return n * factorial(n - 1)
    }
};

factorial(3) // returns 3 * 2 so, result is  --> 6 <--
factorial(2) // returns 2 * 1 which = 2
factorial(1) //returns 1