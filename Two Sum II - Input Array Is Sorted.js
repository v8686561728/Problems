let twoSum = (numbers, target)=> {
 
    let left=0
    let right=1
    
    const sum=()=>{
        if((numbers[left]+numbers[right])==target){ 
            console.log([left+1,right+1])
            return}
        
        if(numbers[left]+numbers[right]<target && right<=numbers.length){
            
            right++
            sum()
        }
        else{
            left++
            sum()
        }
    }
   //  while((numbers[left]+numbers[right])!=target){
        
   //      if(numbers[left]+numbers[right]<target){
   //          ++right
   //      }else{
   //          ++left
   //      }
   //  }
   sum()
    return [left+1,right+1]
   };

   twoSum([2,3,4],6) 