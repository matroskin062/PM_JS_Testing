const { default: axios } = require('axios');
const Ajax = require('./async');

jest.mock('axios');

describe('Ajax: echo', () => {
  it('should return value async', async () => {
    const res = await Ajax.echo('same data');
    expect(res).toBe('same data');
  });

  it('should return val with promise', () => {
    return Ajax.echo('same data').then((data) => {
      expect(data).toBe('same data');
    });
  });

  test('should cathc error with async', async () => {
    try {
      await Ajax.echo();
    } catch (error) {
      expect(error.message).toBe('Error');
    }
  });

  it('should catch error with promise', () => {
    return Ajax.echo('same data').catch((err) => err.message);
  });
});

describe('Axios', () => {
  let res;
  let todos;

  beforeEach(() => {
    todos = [
      { id: 1, title: 'Todo 1', completed: false },
      { id: 2, title: 'Todo 2', completed: true },
    ];
    res = {
      data: {
        todos,
      },
    };
  });

  it('should return data from backend', () => {
    axios.get.mockReturnValue(res);
    return Ajax.get().then((data) => expect(data.todos).toEqual(todos));
  });

  it('should catch error from backend', () => {
    axios.get.mockReturnValue();
    return Ajax.get().catch((e) => expect(e.message).toBe('Error'));
  });
});
