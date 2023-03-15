function nearestSq(n){
  let sqrtOfN = Math.trunc(Math.sqrt(n));
  let result = Math.abs((sqrtOfN*sqrtOfN)-n)>Math.abs((sqrtOfN+1)*(sqrtOfN+1)-n) ? (sqrtOfN+1):sqrtOfN;
  
  if(sqrtOfN*sqrtOfN === n) {
    result = n;
  }
  else {
    result = result*result;
  }  
  return result;
}  