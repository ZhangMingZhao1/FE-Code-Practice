function add(num){
    var sum=num,
    
        tmp=function(v){
            sum+=v;
            return tmp
        };
    
    tmp.toString=function(){
        return sum
    };
    
    return tmp
}


console.log(add(10)(20)(50))        //80