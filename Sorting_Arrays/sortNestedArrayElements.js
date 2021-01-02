let arrs = [[1, 2 ,3, 5, 6 ], [5,4], [2 ,3 ,2]];

function sortNestedArray(arrays){
    arrays = arrays.filter(o => o.length != 0)

    const sortedArray = [];
    let max = 1;
    for (let i = 0; i < max; i++){
        for (const array of arrays){
            if(i < array.length){
                sortedArray.push(array[i]);
                // really nice no need of a second loop to determine the length
                // instead determine the max length while iterating
                if(!i && max < arrays.length) {
                    max = array.length;
                }
            }
        }
    }
   return sortedArray;
}


console.log(sortNestedArray(arrs))