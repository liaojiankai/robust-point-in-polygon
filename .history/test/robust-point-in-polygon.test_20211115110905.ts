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

  // it("DummyClass is instantiable", () => {
  //   expect(new DummyClass()).toBeInstanceOf(DummyClass)
  // })
})
