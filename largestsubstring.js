let sentence="together we can conqueer the world"
// let sentence="kouse cant find largest"
// let sentence="we are in wonderland folks"

let arr=sentence.split(" ")

let largest=''

for(i=0;i<(arr.length);i++)
   {
    if(arr[i].length>largest.length)
           { 
            largest=arr[i]
          }       
    }
    
console.log(arr)
console.log(largest);
