var num=0,pArr=[];
for (i=100;i<1000;i++){
  for(j=i;j<1000;j++){
    var a,b;
    num = i *j;
    a= num.toString();
    b = num.toString().split('').reverse().join('');
    if(a == b){
      if(!pArr.includes(num))
        pArr.push(num);
    }
  }
}
Math.max(...pArr); // the answer.