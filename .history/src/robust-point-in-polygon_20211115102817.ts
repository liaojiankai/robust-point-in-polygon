module.exports = robustPointInPolygon

var orient = require('robust-orientation')

function robustPointInPolygon(vs: <[]>[], point: []) {
  const [x, y]: any = point;
  var n = vs.length

  let inside: number = 1
  var lim = n
  for(var i = 0, j = n-1; i<lim; j=i++) {
    var a = vs[i]
    var b = vs[j]
    var yi = a[1]
    var yj = b[1]
    if(yj < yi) {
      if(yj < y && y < yi) {
        const s:number = orient(a, b, point)
        if(s === 0) {
          return 0
        } else {
          (inside as number) ^= (0 < s) | 0
        }
      } else if(y === yi) {
        var c = vs[(i+1)%n]
        var yk = c[1]
        if(yi < yk) {
          const s:number = orient(a, b, point)
          if(s === 0) {
            return 0
          } else {
            (inside as number) ^= (0 < s)|0
          }
        }
      }
    } else if(yi < yj) {
      if(yi < y && y < yj) {
        const s:number= orient(a, b, point)
        if(s === 0) {
          return 0
        } else {
          (inside as number) ^= (s < 0)|0
        }
      } else if(y === yi) {
        var c = vs[(i+1)%n]
        var yk = c[1]
        if(yk < yi) {
          const s:number = orient(a, b, point)
          if(s === 0) {
            return 0
          } else {
            (inside as number) ^= (s < 0) | 0
          }
        }
      }
    } else if(y === yi) {
      var x0 = Math.min(a[0], b[0])
      var x1 = Math.max(a[0], b[0])
      if(i === 0) {
        while(j>0) {
          var k = (j+n-1)%n
          var p = vs[k]
          if(p[1] !== y) {
            break
          }
          var px = p[0]
          x0 = Math.min(x0, px)
          x1 = Math.max(x1, px)
          j = k
        }
        if(j === 0) {
          if(x0 <= x && x <= x1) {
            return 0
          }
          return 1
        }
        lim = j+1
      }
      var y0 = vs[(j+n-1)%n][1]
      while(i+1<lim) {
        var p = vs[i+1]
        if(p[1] !== y) {
          break
        }
        var px = p[0]
        x0 = Math.min(x0, px)
        x1 = Math.max(x1, px)
        i += 1
      }
      if(x0 <= x && x <= x1) {
        return 0
      }
      var y1 = vs[(i+1)%n][1]
      if(x < x0 && (y0 < y !== y1 < y)) {
        (inside as number) ^= 1
      }
    }
  }
  return 2 * inside - 1
}
