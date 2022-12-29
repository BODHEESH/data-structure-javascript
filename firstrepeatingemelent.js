var arr= [1,3,5,6,77,77,77,5,3,2]
var n=arr.length
 
var count=1;

for(i=0;i<n;i++)
{
  if(arr[i]==arr[i+1])
  {
    ++count;
    
   }
   if((arr[i]!=arr[i+1])&&(count>1))
   {
    
    console.log(arr[i])
    console.log(count);   
    break;
}
     
}