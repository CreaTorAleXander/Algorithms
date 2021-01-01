let arr = [[1, 2 ,3, 5, 6 ], [5,4], [2 ,3 ,2]];
let biggestLength = 0;
arr = arr.filter(o => o.length != 0)

for (let i = 0; i < arr.length; i++){
    if (arr[i].length > biggestLength){
        biggestLength = arr[i].length;
    } 
}

let result = [];
for (let l = 0; l < biggestLength; l++){
    for (let k = 0; k < arr.length; k++){
        if(arr[k][l] !== undefined){
            result.push(arr[k][l])
        }else{
            break;
        }
    }
}


console.log(result)