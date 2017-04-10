function mazeSolve(maze) {
  // Prepopulate solution matrix with all 0s.
  for (var i = 0; i < maze.length; i++) {
    soln[i] = [];
    for (var j = 0; j < maze.length; j++) {
      soln[i][j] = 0;
    }
  }
  return mazeHelper(maze, 0, 0);


  function mazeHelper(maze, row, col) {
    // If we already reached the end , return true
    if (row === maze.length - 1 && col === maze.length - 1 && maze[row][col] === 1) {
      soln[row][col] = 1;
      return true;
    }
    /* Check if the current position is valid - check if the current position has a 1 
    	and that we havent stepped outside the matrix boundary. */
    if (isValid(maze, row, col)) {
      //Add the current position to the solution
      soln[row][col] = 1;
      //Check if we can go down
      if (mazeHelper(maze, row + 1, col)) {
        return true;
      }
      //Check if we can go right
      if (mazeHelper(maze, row, col + 1)) {
        return true;
      }
      //Since we couldnt go down or right , we are in the wrong spot, so lets backtrack.
      soln[row][col] = 0;
      return false;
    }
    //Couldnt find a solution , return false
    return false;
  }

  /* Checks if the given position is valid - check if the given position has a 1 
  	and that we havent stepped outside the matrix boundary. */
  function isValid(maze, row, col) {
    if (maze[row] !== undefined && maze[row][col] === 1) {
      return true;
    } else {
      return false;
    }
  }
}

var soln = [];
var maze = [
  [1, 1, 0, 1],
  [1, 1, 1, 1],
  [1, 0, 1, 1],
  [1, 1, 0, 1]
];
console.log(mazeSolve(maze));
for (var i = 0; i < soln.length; i++) {
  console.log(soln[i]);
}
