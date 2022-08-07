var reverseWords = function(s) {
    const res= s.split(' ').filter(a=>a).reverse().join(' ')
        console.log(res)
    // return res.reverse().join(' ')
   };

   console.log(reverseWords("  hello world  "))