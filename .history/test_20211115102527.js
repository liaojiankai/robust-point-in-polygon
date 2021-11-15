const orientation = require('robust-orientation')

console.log(
  orientation(
    [0.1, 0.1],
    [0.1, 0.1],
    [0.3, 0.7]
  )
)

console.log(
  orientation(
    [0, 0],
    [-1e-64, 0],
    [0, 1]
  )
)

console.log(
  orientation(
    [0, 0],
    [1e-64, 1e-64],
    [1, 1]
  )
)


console.log(
  orientation(
    [0, 0],
    [1e-64, 0],
    [0, 1]
  )
)
