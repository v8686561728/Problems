function processData(input) {
    input=input.split('\n');
    var N=~~input[0].trim().split(' ')[0];
    var M=~~input[0].trim().split(' ')[1];
    var front=[],back=[];
    input=input.slice(1).map(function(x){
      x=x.trim().split(' ');
      var t={a:~~x[0],b:~~x[1],k:~~x[2]};
      front.push(t);
      back.push(t);
    });
    
    front=front.sort(function(a,b){
      return a.a-b.a;
    });
    front.push({a:Infinity,b:Infinity});
    back=back.sort(function(a,b){
      return a.b-b.b;
    });
    back.push({a:Infinity,b:Infinity});
    
    var max=0;
    var cur=0;
    var len=front.length;
    var i=0,j=0;
    for(var k=0;k<=N;k++){
      while(k>=front[i].a){
        cur+=front[i].k;
        i++;
      }
      while(k>back[j].b){
        cur-=back[j].k;
        j++;
      }
      if(cur>max)
        max=cur;
    }
    console.log(max);
  } 
  
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  _input = "";
  process.stdin.on("data", function (input) {
      _input += input;
  });
  
  process.stdin.on("end", function () {
     processData(_input);
  });