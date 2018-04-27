/* Problem 3) The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ? */

var primeFactors = [];
function pf(num){
  var i = 2;
  while(num !== 1){
    if(num % i == 0){
      num = num/i;
      if(!primeFactors.includes(i))
        primeFactors.push(i)
    }
    else
      i = i+1;
  }
  var largestPF = Math.max(...primeFactors);
  return largestPF;
}