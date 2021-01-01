let arrs = [[1, 2 ,3, 5, 6 ], [5,4], [2 ,3 ,2]];
let biggestLength = 0;
arrs = arrs.filter(o => o.length != 0)

for (let i = 0; i < arrs.length; i++){
    if (arrs[i].length > biggestLength){
        biggestLength = arrs[i].length;
    } 
}

const result = [];
for (let l = 0; l < biggestLength; l++){
    for (let k = 0; k < arrs.length; k++){
        if(arrs[k][l] !== undefined){
            result.push(arrs[k][l])
        }else{
            break;
        }
    }
}


console.log(result)