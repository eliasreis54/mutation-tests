const oldEnough = require('./index');

describe('Test my function', () => {
  test('Old enough', () => {
    expect(oldEnough(19)).toBe(true);
  });
});