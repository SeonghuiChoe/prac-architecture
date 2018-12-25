module.exports = class BeverageRepository {
  constructor(context) {
    this.context = context;
  }

  getBeverages() {
    return this.context.Beverages.getAll();
  }
};
