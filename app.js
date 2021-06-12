function narcissistic(value) {
    // Code me to return true or false
    let stringed = value.toString();
    let arr = [];
    for (let i =0; i < stringed.length;i++){
      arr.push(stringed[i])
    }
    //console.log(arr)
    if (cal(arr) == value){
      return true;
    }else{return false;}
    
  }
  
  function cal(arr) {
    let result = 0;
    for (num in arr){
      result += Math.pow(arr[num],arr.length);
      //console.log(result);
    }
    return result
  }

console.log(narcissistic(371))