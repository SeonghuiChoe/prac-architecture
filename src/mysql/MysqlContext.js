module.exports = class MysqlContext {
  constructor(connection) {
    this.connection = connection;
  }

  get Beverages() {
    return {
      getAll: () => (
        new Promise((res, rej) => {
          this.connection.query('SELECT * FROM angelinus.Beverage', (err, results) => (
            err ? rej(err) : res(results)
          ));
        })
      ),
    };
  }
};
