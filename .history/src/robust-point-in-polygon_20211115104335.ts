module.exports = robustPointInPolygon

var orient = require('robust-orientation')

function robustPointInPolygon(vs: [][], point: number[]) {
  const [x, y]: any = point;
  var n = vs.length

  let inside: number = 1
  var lim: number = n
  for(var i = 0, j = n-1; i<lim; j=i++) {
    const a:number[] = vs[i]
    const b:number[] = vs[j]
    const yi: number = a[1]
    const yj: number = b[1]
    if(yj < yi) {
      if(yj < y && y < yi) {
        const s: any = orient(a, b, point)
        if(s === 0) {
          return 0
        } else {
          (inside as number) ^= (0 < s) | 0
        }
      } else if(y === yi) {
        var c = vs[(i+1)%n]
        var yk = c[1]
        if(yi < yk) {
          const s:any = orient(a, b, point)
          if(s === 0) {
            return 0
          } else {
            (inside as number) ^= (0 < s)|0
          }
        }
      }
    } else if(yi < yj) {
      if(yi < y && y < yj) {
        const s:any= orient(a, b, point)
        if(s === 0) {
          return 0
        } else {
          (inside as number) ^= (s < 0)|0
        }
      } else if(y === yi) {
        var c = vs[(i+1)%n]
        var yk = c[1]
        if(yk < yi) {
          const s:any = orient(a, b, point)
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
      const y0: number = vs[(j+n-1)%n][1]
      while(i+1<lim) {
        const p: number = vs[i+1]
        if(p[1] !== y) {
          break
        }
        const px = p[0]
        x0 = Math.min(x0, px)
        x1 = Math.max(x1, px)
        i += 1
      }
      if(x0 <= x && x <= x1) {
        return 0
      }
      const y1: number = (vs[(i+1)%n] as [])[1]
      if(x < x0 && (y0 < y !== y1 < y)) {
        (inside as number) ^= 1
      }
    }
  }
  return 2 * inside - 1
}
