var a =[34,33,4,22,6,88];
let temp=0;
for(i=0;i<a.length;i++){
    for(j=0;j<a.length;j++)
    {
        if(a[i]<a[j])
        {
          temp=a[i];
          a[i]=a[j];
          a[j]=temp;  
        }
    }
}

    console.log(a);
