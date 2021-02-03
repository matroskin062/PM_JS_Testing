const { map } = require('./mock');

describe('map function', () => {
  let array;
  let fn;
  beforeEach(() => {
    array = [1, 1, 2, 3, 5];
    fn = jest.fn((x) => x ** 2);
    map(array, fn);
  });

  it('should call callback', () => {
    map(array, fn);
    expect(fn).toBeCalled();
  });

  it('should call callback array.length times', () => {
    expect(fn).toBeCalledTimes(array.length);
    expect(fn.mock.calls.length).toBe(array.length);
  });

  it('should pow 2 each element', () => {
    expect(fn.mock.results[0].value).toBe(1);
    expect(fn.mock.results[1].value).toBe(1);
    expect(fn.mock.results[2].value).toBe(4);
    expect(fn.mock.results[3].value).toBe(9);
    expect(fn.mock.results[4].value).toBe(25);
  });

  it('should fn work', () => {
    fn.mockReturnValueOnce(100).mockReturnValueOnce(200).mockReturnValue('42');
    expect(fn()).toBe(100);
    expect(fn()).toBe(200);
    expect(fn()).toBe('42');
    expect(fn()).toBe('42');
    expect(fn()).toBe('42');
  });
});
