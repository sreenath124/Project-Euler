/*Problem 1.)
    Evaluate the sum of all the amicable numbers under 10000.
*/

var findDivisor = (num) => {
    var divisorArr = [1],
        sqRt = Math.sqrt(num),
        quotient;
    for (i = 2; i <= sqRt; i++) {
        if (num % i == 0) {
            quotient = num / i;
            if (divisorArr.indexOf(i) == -1)
                divisorArr.push(i);
            if (divisorArr.indexOf(quotient) == -1)
                divisorArr.push(quotient);
        }
    }
    divisorArr = divisorArr.sort((num1, num2) => num1 - num2);
    return divisorArr;
};

var sumOfArrayElements = (listOfDivisors) => {
    var sum = 0;
    listOfDivisors.forEach((divisor) => sum += divisor);
    return sum;
};

var solArray = []; // solArray contains amicable pairs
for (let i = 1; i < 2000; i++) {
    var dn = sumOfArrayElements(findDivisor(i));
    if (i != dn) {
        if (i == sumOfArrayElements(findDivisor(dn))) {
            if (solArray.indexOf(i) == -1)
                solArray.push(i);
            if (solArray.indexOf(dn) == -1)
                solArray.push(dn);
        }
    }
};

var ans = sumOfArrayElements(solArray);

