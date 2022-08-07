const binarysearch = (arr,start,end,num) =>{
    let mid=parseInt((start+end)/2,10)
    if(arr[mid]===num){
        return mid
    }
    if(arr[mid]<num){
      return  binarysearch(arr,num,mid+1,end)
    }else{
      return  binarysearch(arr,num,start,mid-1)
    }
    return -1
}


function search(arr, l, h, key)
    {
        if (l > h)
            return -1;
      
        let mid = parseInt((l + h) / 2, 10);
        if (arr[mid] == key)
            return mid;
      
        // The tricky case, just update left and right
        if ((arr[l] == arr[mid])
            && (arr[h] == arr[mid]))
        {
            ++l;
            --h;
            return search(arr, l, h, key)
        }
      
        // If arr[l...mid] is sorted
        if (arr[l] < arr[mid])
        {
      
            // As this subarray is sorted, we can quickly
            // check if key lies in any of the halves
            if (key >= arr[l] && key <= arr[mid])
                return search(arr, l, mid - 1, key);
      
            // If key does not lie in the first half
            // subarray then divide the other half
            // into two subarrays such that we can
            // quickly check if key lies in the other half
            return search(arr, mid + 1, h, key);
        }
      
        // If arr[l..mid] first subarray is not sorted
        // then arr[mid... h] must be sorted subarray
        if (key >= arr[mid] && key <= arr[h])
            return search(arr, mid + 1, h, key);
      
        return search(arr, l, mid - 1, key);
    }

function search2(arr,key){
    let low=0
    let high=arr.length-1
    while(low<=high){
        let mid=Math.floor((low+high)/2)
        if(arr[mid]===key){
            return mid
        }
        if(arr[low]<arr[mid]){
            if(key>=arr[low] && key<=arr[mid]){
                high=mid-1
            }else{
                low=mid+1
            }
        }else{
            if(key>=arr[mid] && key<=arr[high]){
                low=mid+1
            }else{
                high=mid-1
                         }
        }
    }
    return -1
}
console.log(search2([4,5,6,7,8,9,10,11],8))