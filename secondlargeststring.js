// let sentence="together we can conqueer the world"
// let sentence="kouse cant find largest"
let sentence="Ameen kosu ash vi"


let arr=sentence.split(" ")

let largest=''
let second=''

for(i=0;i<(arr.length);i++)
   {
    if(arr[i].length>largest.length)
           { 
            second =largest       
            largest=arr[i]
           }
          if((arr[i].length<largest.length)&&(arr[i].length>second.length))
          {
            second=arr[i]
          }        
    }
    

console.log(arr)
console.log(largest);
console.log(second)