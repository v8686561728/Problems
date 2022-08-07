const next=(arr)=>{
   let index
   for(let k=arr.length-1;k>0;k--){
    if(arr[k]>arr[k-1]){
        swap(arr,k,k-1)
        index=k
        break
    }
}
let right=arr.splice(index,arr.length-index).sort((a,b)=>a-b)
    return [...arr,...right]
}

const swap=(arr,i,j)=>{
    let temp=arr[i]
    arr[i]=arr[j]
    arr[j]=temp
}

console.log(next([0,1,2,1]))