function myTrim(x) {
  return x.replace(/^\s+|\s+$|\[|\],|\]/gm, '');
}

const max = Number.MAX_SAFE_INTEGER;

function loadMap() {
  let fs = require('fs');
  let text = fs.readFileSync('./map15x15.txt').toString();
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

let map = loadMap();

function dijkstraAlgorithm(map) {
  let distance = map[0];
  let visited = [];
  visited.push(0);

  for (let i = 0; i < map.length; i++) {
    for (let j = 0; j < map.length; j++) {
      if (i === 0 && j === 0) map[i][j] = 0;
      if (map[visited[i]][j] !== max) {
        if (!visited.includes(j)) visited.push(j);

        if (distance[j] > map[visited[i]][j] + distance[visited[i]]) {
          distance[j] = map[visited[i]][j] + distance[visited[i]];
        }
        if (distance[visited[i]] > map[visited[i]][j] + distance[j]) {
            distance[visited[i]] = map[visited[i]][j] + distance[j];
          }
      }
    }
  }
  console.log(distance);
}

dijkstraAlgorithm(map);
