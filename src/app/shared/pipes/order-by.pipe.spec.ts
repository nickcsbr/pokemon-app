import { OrderByPipe } from './order-by.pipe';

describe('OrderByPipe', () => {
  it('create an instance', () => {
    const pipe = new OrderByPipe();
    expect(pipe).toBeTruthy();
  });
  it('should order by name', () => {
    const pipe = new OrderByPipe();
    const unorderedArray = [ { name: 'X'}, { name: 'A'}, { name: 'G'}];
    const correctArray = [ { name: 'A'}, { name: 'G'}, { name: 'X'}];
    const sortedArray = pipe.transform(unorderedArray, 'name');
    expect(sortedArray).toEqual(correctArray);
  })
});
