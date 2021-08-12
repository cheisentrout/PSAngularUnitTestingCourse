/* Import any component your tests will recreate to compose
their "arrange" sections - what do they need to redefine for
starting conditions? Import here: */
import { StrengthPipe } from './strength.pipe';

describe('StrengthPipe', () => {
  test('should display weak if strength is 5', () => {
    const pipe = new StrengthPipe();

    // arrange
    // where does this transform method come from? doesn't exist on component...
    // Oh! It comes from PipeTransform, an ng tool imported in the associated component
    expect(pipe.transform(5)).toEqual('5 (weak)');
  });

  test('should display strong if the strength is 10', () => {

  const pipe = new StrengthPipe();

  expect(pipe.transform(10)).toEqual('10 (strong)');
  });
});
