import inside from "../src/robust-point-in-polygon"

/**
 * Dummy test
 */
describe("Dummy test", () => {
  var polygon = [ [ 1, 1 ], [ 1, 2 ], [ 2, 2 ], [ 2, 1 ] ]
  console.log(inside(polygon, [ 1.5, 1.5 ]))
  // it("works if true is truthy", () => {
  //   expect(true).toBeTruthy()
  // })

  // it("DummyClass is instantiable", () => {
  //   expect(new DummyClass()).toBeInstanceOf(DummyClass)
  // })
})
