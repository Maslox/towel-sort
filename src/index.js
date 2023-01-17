module.exports = function towelSort (matrix) {
  
let arr = [];
if(matrix === undefined){
  return arr;
} else if(matrix === 0){
  return arr;
}
else {
  for(let i = 0; i < matrix.length; i++){
    if(i % 2 == 0){
        for(let j = 0; j < matrix[i].length; j++){
            arr.push(matrix[i][j])
        }
    } else {
        matrix[i].reverse();
        for(let j = 0; j < matrix[i].length; j++){
            arr.push(matrix[i][j])
        }
    }
}
  return arr;
}
}
