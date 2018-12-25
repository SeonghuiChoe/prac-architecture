const Beverage = require('./Beverage');

module.exports = class MongodbContext {
  constructor(connection) {
    const BeverageModel = connection.model('Beverage', Beverage);
    this.connection = {
      beverage: BeverageModel,
    };
  }

  get Beverages() {
    return {
      getAll: () => this.connection.beverage.find(),
    };
  }
};
