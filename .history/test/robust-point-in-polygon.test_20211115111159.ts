import inside from "../src/robust-point-in-polygon"



describe("test", () => {
  it("works if true is truthy", () => {
    const polygon = [ [ 1, 1 ], [ 1, 2 ], [ 2, 2 ], [ 2, 1 ] ]
    expect(inside(polygon, [ 1.5, 1.5 ])).toBe(-1)
    expect(inside(polygon, [ 1.2, 1.9 ])).toBe(-1)
    expect(inside(polygon, [ 0, 1.9 ])).toBe(1)
    expect(inside(polygon, [ 1.5, 2 ])).toBe(0)
    expect(inside(polygon, [ 1.5, 2.2 ])).toBe(1)
    expect(inside(polygon, [ 3, 5 ])).toBe(1)
    expect(inside(polygon, [1.5, 2])).toBe(0)
  })
})


describe("test1", () => {
  it("works if true is truthy", () => {
    const polygon = [ [-1,-1], [1,-1], [1,1], [-1,1] ]

    for(var j=0; j<3; ++j) {
      expect(inside(polygon, [0,0])).toBe(-1)
      var subdiv = []
      for(var i=0; i<polygon.length; ++i) {
        var a = polygon[i]
        var b = polygon[(i+1)%polygon.length]
        var c = [0.5*(a[0] + b[0]), 0.5*(a[1] + b[1])]
        subdiv.push(a, c)
        expect(inside(polygon, polygon[i])).toBe(0)
        expect(inside(polygon, c)).toBe(0)
      }
      expect(inside(polygon, [1e10, 1e10])).toBe(1)
      polygon = subdiv
    }
  })
})
