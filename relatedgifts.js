function countGroups(related) {
    const splitArr = related.map(group=>group.split(''))
   const groupArr = []
   const nongroup = []
    for(let i=0;i<splitArr.length;i++){
        for(let j=0;j<splitArr[i].length;j++){
            if(i==j)
            continue;
            if(splitArr[i][j]==1 && groupArr.indexOf(j)==-1){
                const nongroupIndex = nongroup.indexOf(j)
                if(nongroupIndex>-1){
                 nongroup.splice(nongroupIndex,1)
                }
                if(groupArr.indexOf(i)==-1)
                groupArr.push(i)
                groupArr.push(j)
            }else{
                if(nongroup.indexOf(j)==-1 && groupArr.indexOf(j)==-1)
                nongroup.push(j) 
            }
        }
    }
let count = groupArr.length>0?1:0
console.log(count+nongroup.length,groupArr,nongroup)
    return count+nongroup.length
 
 }

 countGroups(['1000','0100','0010','0001'])