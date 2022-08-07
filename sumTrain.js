function score(arr,sum,row,pos){
   
    if(row>arr.length-1){
        return sum
    }
   

  score(arr,arr[row][pos],row+1,pos)

  console.log(arr[row][pos])
}

score([[2],[1,2],[1,2,3]],0,0,0)