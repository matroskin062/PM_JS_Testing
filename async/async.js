const { default: axios } = require('axios');

class Ajax {
  static echo(data) {
    return new Promise((res, reject) => {
      setTimeout(() => {
        if (data) {
          res(data);
        } else {
          reject(new Error('Error'));
        }
      }, 2000);
    });
  }
  static async get() {
    try {
      const res = await axios.get('https://jsonplaceholder.typicode.com/todos');
      return res.data;
    } catch (e) {
      throw new Error('Error');
    }
  }
}

module.exports = Ajax;
