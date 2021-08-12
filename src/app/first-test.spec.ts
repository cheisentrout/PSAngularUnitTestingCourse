/* jasmine function for grouping tests */
/* General syntax for writing tests:
      descriptive string
      callback function
      content of test
 */
describe('my first test', () => {
  // sut - system under test
  let sut;

  /* this function is meant to reset the state (of a unit, component?)
  so that when any test begins running, it's not picking up effects
  from previous tests - this lets it start clean

  IMPORTANT - you must put code in this function that resets the state
  before a test is run. Setting sut to an empty object accomplishes this. */
  beforeEach(() => {
    sut = {};
  });

  /* the it() function nests inside the describe() function so that when a
  test is run, we get the full string "my first test should be true if true..."

  */
  it('should be true if true', () => {
    // ARRANGE phase -- add a property "a" to the sut object, set it to false
    // starting condition
    sut.a = false;

    // ACT
    // affect change to test against starting condition
    sut.a = true;

    // ASSERT
    // describe anticipated/desired result
    expect(sut.a).toBe(true);
  });
});
