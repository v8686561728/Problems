const addDigit=(num,digit)=>{
    num+=''
    let stringNum=num.split('')
    let i=stringNum.length-1
    while(i>=0){
        if(stringNum[i]>digit)
        break
        i--
    }
    stringNum.splice(i+1,0,digit)
    console.log(parseInt(stringNum.join('')))
}

const addDigit1=(num,digit)=>{
    num+=''
    let i=num.length-1
    while(i>=0){
        if(num[i]>digit)
        break
        i--
    }
    const result=num.substring(0,i+1)+digit+num.substring(i+1,num.length)
    return parseInt(result)
}
addDigit1(123,6)

