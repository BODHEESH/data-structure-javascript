var x=4;
 var arr =[2,3,3,4,4,6,7,7,7]
n=arr.length
var flag=0;

for(i=0;i<n;i++)
 {
    for(j=i+1;j<n;j++)
    {
        if(arr[i]==arr[j])
        {
        flag=1;     
        }
    }
    if(flag==1)
    {
    console.log("repeat element \n"+arr[i]);
    flag=0;
    }
 }
