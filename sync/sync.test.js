const Lodash = require('./sync');

describe('Lodash class', () => {
  const _ = new Lodash();

  describe('compact method', () => {
    let arr;
    beforeEach(() => {
      arr = [false, 32, 0, '', true, null, 'string'];
    });
    afterAll(() => {
      _ = new Lodash();
    });

    it('should be defined', () => {
      expect(_.compact).toBeDefined();
      expect(_.compact).not.toBeUndefined();
    });

    it('should', () => {
      arr.push(...['one', 'two']);
      expect(arr).toContain('one');
      expect(arr).toContain('two');
    });

    it('should remove falsy values from array', () => {
      const res = [32, true, 'string'];
      expect(_.compact(arr)).toEqual(res);
    });

    it('should not contain falsy values', () => {
      expect(_.compact(arr)).not.toContain(false);
      expect(_.compact(arr)).not.toContain(0);
      expect(_.compact(arr)).not.toContain('');
      expect(_.compact(arr)).not.toContain(null);
    });
  });

  describe('groupBy method', () => {
    it('should be defined', () => {
      expect(_.groupBy).toBeDefined();
      expect(_.groupBy).not.toBeUndefined();
    });
    it('should group array items by Math.floor', () => {
      const arr = [2.2, 2.4, 4.2, 3.1];

      const res = {
        2: [2.2, 2.4],
        4: [4.2],
        3: [3.1],
      };

      expect(_.groupBy(arr, Math.floor)).toEqual(res);
    });

    it('should group array items by length', () => {
      const arr = ['one', 'two', 'three'];

      const res = {
        3: ['one', 'two'],
        5: ['three'],
      };

      expect(_.groupBy(arr, 'length')).toEqual(res);
    });

    it('should return object', () => {
      expect(_.groupBy([], Math.trunc)).toBeInstanceOf(Object);
    });
  });
});
