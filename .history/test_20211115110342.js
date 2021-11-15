const inside = require('./dist/robust-point-in-polygon.umd')

// var polygon = [
//   [1, 1],
//   [1, 2],
//   [2, 2],
//   [2, 1]
// ]


//  console.log(inside(polygon, [1.5, 1.5]))
//  console.log(inside(polygon, [1.2, 1.9]))
//  console.log(inside(polygon, [0, 1.9]))
//  console.log(inside(polygon, [1.5, 2]))
//  console.log(inside(polygon, [1.5, 2.2]))
//  console.log(inside(polygon, [3, 5]))
//  console.log(inside(polygon, [1.5, 2]))



var polygon = [
  [-1, -1],
  [1, -1],
  [1, 1],
  [-1, 1]
]
for (var j = 0; j < 3; ++j) {
  console.log('-1: ', inside(polygon, [0, 0]))
  var subdiv = []
  for (var i = 0; i < polygon.length; ++i) {
    var a = polygon[i]
    var b = polygon[(i + 1) % polygon.length]
    var c = [0.5 * (a[0] + b[0]), 0.5 * (a[1] + b[1])]
    subdiv.push(a, c)

    console.log('0: ',inside(polygon, polygon[i]))
    console.log('c: ', inside(polygon, c))
  }

  console.log('1: ', inside(polygon, [1e10, 1e10]))
}
