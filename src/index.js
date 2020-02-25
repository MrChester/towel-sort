
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let result = [];

  if(arguments.length === 0){
    return [];
  }

  matrix.forEach( (item, i) => {
    if(i % 2 === 0){
      result = result.concat(item);
    }
    else{
      result = result.concat(item.reverse());
    }
  });
  return result;
}
