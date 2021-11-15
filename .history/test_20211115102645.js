const orientation = require('robust-orientation')

  var x = 1e-64

for (var i = 0; i < 200; ++i) {
  console.log(orientation(
    [-x, 0],
    [0, 1],
    [x, 0]
  ))
  console.log(orientation(
    [-x, 0],
    [0, 0],
    [x, 0]
  ))
  console.log(orientation(
    [-x, 0],
    [0, -1],
    [x, 0]
  ))
  console.log(orientation(
    [0, 1],
    [0, 0],
    [x, x]
  ))
  x *= 10
}
