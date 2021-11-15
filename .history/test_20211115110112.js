const inside = require('./dist/robust-point-in-polygon.umd')

var polygon = [
  [1, 1],
  [1, 2],
  [2, 2],
  [2, 1]
]


 console.log(inside(polygon, [1.5, 1.5]))
 console.log(inside(polygon, [1.2, 1.9]))
 console.log(inside(polygon, [0, 1.9]))
 console.log(inside(polygon, [1.5, 2]))
 console.log(inside(polygon, [1.5, 2.2]))
 console.log(inside(polygon, [3, 5]))
 console.log(inside(polygon, [1.5, 2]))
