/* Even Fibonacci numbers */

var sum =0;
function fibNac(n1, n2){
  var fib = 0
  fib = n1 + n2;
  n1 = n2;
  n2 = fib;
  if(fib< 4e6){
    if(fib % 2 == 0)
      sum += fib;
    fibNac(n1, n2);
  }
  else{
    console.log("Sum is" + sum);
    return;
  }
}

fibNac(0,1);