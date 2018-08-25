function testLoop(obj1,obj2) {
    let res1 = Object.values(obj1).some(function(v){
        return obj2 === v;
    })

    let res2 = Object.values(obj2).some(function(v){
        return obj1 ===v;
    })

    return res1 && res2;

}