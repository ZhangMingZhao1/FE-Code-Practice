let data = [
    {
        o1 : 111,
        d1 : ['1','2'],
        d2 : ['3', '4'],
    },
    {   o2 : 222,
        o1 : 111,
        d1 : ['1','2'],
        d2 : ['6'],
    },
    {
        d3 : ['1']
    }

]

let filter =  {
        d1 : ['1'],
        d2 : ['3']
    }
let res = [];
let flag;
const filterKeys = Object.keys(filter);
const dataKeys = Object.keys(data);
data.map( (item) => {
    // {
    //     o1 : 111,
    //     d1 : ['1','2'],
    //     d2 : ['3', '4'],
    // },
    flag = 1;
    const itemKeys = Object.keys(item);
    // itemKeys:['o1','d1','d2']
    // fileterKeys: ['d1','d2'];
    filterKeys.map((k)=>{
        // k = 'd1';
        if(itemKeys.indexOf(k)==-1) {
            flag = 0;
        }else {
            let tmp1 = item[k].join('')==='undefined'?item[k]:item[k].join('');
            let tmp2 = filter[k].join('')==='undefined'?filter[k]:filter[k].join('');
            if(tmp1.indexOf(tmp2)===-1) {
                flag = 0;
            }
        }

    });
    if(flag) res.push(item);
});
console.log(res);
