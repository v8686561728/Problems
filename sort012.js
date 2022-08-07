

const sort=(Arr)=>{
    let n=Arr.length
    let low=0
    let mid=0
    let high=n-1
    const swap=(a,b)=>{
        let temp=Arr[a]
        Arr[a]=Arr[b]
        Arr[b]=temp
    }
    while(mid<=high){
        if(Arr[mid]==0){
            if(Arr[mid]==Arr[low]){

            }else{
            swap(low,mid)}
            low++
            mid++
        }
        else if(Arr[mid]==1){
            mid++
        }else{
            swap(high,mid)
            high--
        }
    }
    return Arr
}

console.log(sort([1,1,1,2,2,2,0,0,0]))