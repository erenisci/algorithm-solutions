function bulbMaze(maze) {
  for (let i = 0; i < maze.length; i++) {
    if (maze[i] === 'x' && i % 2 === 1) return false;
    if (maze[i] === 'o' && i % 2 === 0) return false;
  }
  return true;
}
