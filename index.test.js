const oldEnough = require('./index');

describe('Test my function', () => {
  test('Old enough', () => {
    expect(oldEnough(19)).toBe(true);
    expect(oldEnough(17)).toBe(false);
    expect(oldEnough(18)).toBe(true);
  });
});