
function largestOfFour(arr) {
  // You can do this!
  maiores = [];
  maior = 0;
  for(x = 0; x < arr.length;x++){
    for (i = 0;i < arr[x].length;i++){
      if (maior < arr[x][i]){
        maior = arr[x][i];
      }
    }
      maiores.push(maior);
       maior = 0;
  }
  return maiores;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
