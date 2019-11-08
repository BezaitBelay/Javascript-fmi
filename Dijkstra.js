function myTrim(word) {
  return word.replace(/^\s+|\s+$|\[|\],|\]/gm, '');
}

function loadMap(fileName) {
  let fs = require('fs');
  let text = fs.readFileSync().toString();
  let textByLine = text.split('\n');

  let matrix = [];
  for (let i = 0; i < textByLine.length; i++) {
    matrix[i] = myTrim(textByLine[i]);
    matrix[i] = matrix[i].split(',');

    for (let j = 0; j < matrix[i].length; j++) {
      matrix[i][j] = parseInt(matrix[i][j]);
      if (matrix[i][j] === 0) matrix[i][j] = max;
    }
  }
  return matrix;
}

let fileName = './map15x15.txt';
let map = loadMap(fileName);

const max = Number.MAX_SAFE_INTEGER;

function dijkstraAlgorithm(map) {
  let distance = map[0];
  let visited = [];
  visited.push(0);

  for (let i = 0; i < map.length; i++) {
    for (let j = 0; j < map.length; j++) {
      if (i === 0 && j === 0) map[i][j] = 0;
      if (map[visited[i]][j] !== max) {
        if (!visited.includes(j)) visited.push(j);

        let row = visited[i];
        if (distance[j] > map[row][j] + distance[row]) {
          distance[j] = map[row][j] + distance[row];
        }
        if (distance[row] > map[row][j] + distance[j]) {
            distance[row] = map[row][j] + distance[j];
          }
      }
    }
  }
  distance.forEach((element,index) => {
    console.log(`The shortest way to ${index+1} is ${element}`);
  });
}

dijkstraAlgorithm(map);
