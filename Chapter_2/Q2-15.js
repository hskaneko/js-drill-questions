function canGo(x, y, mazeDef) { // (x, y)も行けるか？
  if (x < 0 || y < 0 ||
    x >= mazeDef[0].length || y >= mazeDef.length)
    return false
  if (mazeDef[x][y] == '#' || mazeDef[x][y] == 'X' ||
    mazeDef[x][y] == '+')
    return false
  return true
}

function findPath(currentX, currentY, mazeDef) {
  if (/* ① */canGo(currentX, currentY, mazeDef)) return false
  else if (mazeDef[currentX][currentY] == 'G') return /* ② */
  else mazeDef[currentX][currentY] =
    mazeDef[currentX][currentY] == 'S' ? 'S' : '/* ③ */'
  //　西（左方向）
  if (/* ④ */(currentX /* ⑤ */ 1, currentY, mazeDef))
    return true
  //　南（下方向）
  if (/* ④ */(currentX, currentY /* ⑥ */ 1, mazeDef))
    return true
  //　東（右方向）
  if (/* ④ */(currentX /* ⑥ */ 1, currentY, mazeDef))
    return true
  //　北（上方向）
  if (/* ④ */(currentX, currentY /* ⑤ */ 1, mazeDef))
    return true
  mazeDef[currentX][currentY] =
    mazeDef[currentX][currentY] == 'S' ? 'S' : '/* ⑦ */'
  return /* ⑧ */
}




maze1 = [
  ['S', '.', '#', '.'],
  ['#', '.', '#', 'G'],
  ['#', '.', '#', '.'],
  ['#', '.', '.', '.'],
]

maze2 = [
  ['.', '.', '.', '.'],
  ['#', '.', 'S', '.'],
  ['#', '#', '#', '.'],
  ['#', 'G', '#', '.'],
]

maze3 = [
  ['S', '.', '#', '#', '#', '#'],
  ['#', '.', '#', '.', '.', '#'],
  ['#', '.', '#', '.', '.', '#'],
  ['#', '.', '.', '#', 'G', '.'],
  ['#', '#', '.', '.', '.', '#'],
]

maze4 = [
  ['S', '.', '.', '.', '#', '#'],
  ['#', '.', '#', '.', '.', '.'],
  ['#', '.', '#', '#', '.', '#'],
  ['.', '.', '#', '.', '#', '#'],
  ['#', '.', '.', '.', '#', 'G'],
  ['#', '.', '#', '.', '.', '.']
]

function displayMaze(mazeDef) {
  for (let i = 0; i < mazeDef.length; i++) {
    let s = ''
    for (let j = 0; j < mazeDef[i].length; j++) {
      s += mazeDef[i][j]
    }
    console.log(s)
  }
}

findPath(0, 0, maze1)
displayMaze(maze1)

findPath(0, 2, maze2)
displayMaze(maze2)

// displayMaze(maze3)
// findPath(0, 0, maze3)

// findPath(0,0, maze4)
// displayMaze(maze4)
