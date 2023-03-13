function spinWords(string){
    //TODO Have fun :)
    let tempStr=string.split(' ')
    let tempArray=[]
    for(let i = 0;i < tempStr.length;i++){
      if(tempStr[i].length>=5) tempArray.push(tempStr[i].split('').reverse().join(''))
      else tempArray.push(tempStr[i]) 
    }
    let result=tempArray.join(' ')
    return result
  }
