let a=[33,44,55,66,77,88];
let key=77;

let left=0;
let right=a.length; 
let mid=(left+right)/2;

// console.log(Math.floor(mid))
// console.log(mid)
let flag=1;
while(left!=right)
{
    if(key==a[mid])
    {
       console.log('element present',mid);
       flag=0;
       break;
    }
    else if(key>a[mid])
    {
     left=mid;
     mid=Math.floor((left+right)/2)
    }
    else if(key<a[mid])
    {
     right=mid; 
     mid=Math.floor((left+right)/2)
    }
    
}

if(flag==1)
{
    console.log("element not present");
}